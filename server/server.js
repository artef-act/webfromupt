const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Ensure uploads directory exists
const fs = require('fs');
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.post("/register", upload.fields([
  { name: 'foto', maxCount: 1 },
  { name: 'transkrip', maxCount: 1 },
  { name: 'formulir', maxCount: 1 }
]), async (req, res) => {

  try {
    const {
      nama,
      email: rawEmail,
      password
    } = req.body;

    const email = rawEmail || req.body.nim;
    const nim = req.body.nim || email;

    if (!email || !nim) {
      return res.status(400).json({ message: "NIM / email tidak valid" });
    }

    if (email.length > 11) {
      return res.status(400).json({
        message: "Email terlalu panjang untuk kolom users.email; gunakan NIM atau perbaiki schema database"
      });
    }

    const [existing] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existing.length > 0) {
      return res.status(400).json({
        message: "NIM sudah terdaftar"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query(
      `
      INSERT INTO users
      (nama, email, password, role)
      VALUES (?, ?, ?, ?)
      `,
      [nama, email, hashedPassword, "pendaftar"]
    );
      await db.query(
        `
        INSERT INTO pendaftar
        (nim, semester, kelas, alasan, foto_pas, transkrip, formulir)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
      [
        nim,
        req.body.semester,
        req.body.kelas,
        req.body.alasan,
        req.files['foto'] ? req.files['foto'][0].filename : null,
        req.files['transkrip'] ? req.files['transkrip'][0].filename : null,
        req.files['formulir'] ? req.files['formulir'][0].filename : null
      ]
    );

    res.json({
      message: "Register berhasil"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });
  }

});

app.post("/login", async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;

    const [users] = await db.query(
      "SELECT users.*, pendaftar.nim, pendaftar.semester, pendaftar.kelas, pendaftar.alasan, pendaftar.foto_pas, pendaftar.transkrip, pendaftar.formulir, pendaftar.status FROM users LEFT JOIN pendaftar ON users.email = pendaftar.nim WHERE users.email = ?",
      [email]
    );
    if (users.length === 0) {
      return res.status(400).json({
        message: "Email tidak ditemukan"
      });
    }

    const user = users[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({
        message: "Password salah"
      });
    }

    res.json({
      message: "Login berhasil",
      user: {
        nama: user.nama,
        email: user.email,
        role: user.role,
        nim: user.nim,
        semester: user.semester,
        kelas: user.kelas,
        alasan: user.alasan,
        foto: user.foto_pas,
        transkrip: user.transkrip,
        formulir: user.formulir,
        status: user.status
      }
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error"
    });
  }
});


app.listen(3001, () => {
  console.log("Server running");
});
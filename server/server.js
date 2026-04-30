const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {

  try {

    const {
      nama,
      email,
      password
    } = req.body;

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
      [nama, email, hashedPassword, "admin"]
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
      "SELECT * FROM users WHERE email = ?",
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
        id: user.id,
        nama: user.nama,
        email: user.email,
        role: user.role
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
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "",
  database: "pendaftaranupt2026"
});

module.exports = db;
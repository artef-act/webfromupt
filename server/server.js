const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(express.json())

const port = 3307 // Port di sistem Arif (NixOS - 3307)

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pendaftaranupt2026"
})

app.listen(port, ()=>{
    console.log("Listening... ")
})
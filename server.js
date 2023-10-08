const express = require("express")
const mysql = require("mysql")

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    database: "school",
    user: "root",
    password: "root",
})

db.connect((err) => {
    if (err) throw err
    console.log("database connected...")
    app.get("/", (req, res) => {
        res.send("OK ROUTE OPEN");
    })    
})


app.listen(9000, () => {
    console.log("server ready...")
})
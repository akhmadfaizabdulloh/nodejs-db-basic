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

    const sql = "SELECT * FROM user"
    db.query(sql, (err, result) => {
        const users = JSON.parse(JSON.stringify(result))
        console.log('hasil database ->', users)
        app.get("/", (req, res) => {
            res.send(users)
        })
    })
})


app.listen(9000, () => {
    console.log("server ready...")
})
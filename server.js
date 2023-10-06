const express = require("express")
const mysql = require("mysql")

const app = express();

app.get("/", (req, res) => {
    res.send("OK ROUTE OPEN");
})

app.listen(9000, () => {
    console.log("server ready...")
})
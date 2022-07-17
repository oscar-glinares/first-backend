const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const mysql = require("mysql");
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"firstsql"
})

//middleware
app.use(express.json()); 
app.use(cors());

con.connect()

app.listen(PORT, () => console.log("Listening on " + PORT))

app.get("/api/get", (_req, res) => {
    con.query("SELECT * FROM users", (err, rows, _fields) => {
        if(err){
            throw(err)
        }
        res.status(200).send({rows})
    })
})
app.post("/api/post",(req, res) => {
    con.query(`INSERT INTO users (name, password, email) VALUES ("${req.body.name}","${req.body.password}","${req.body.email}")`, (err) => {
        if (err){
            throw(err)
        }
        res.status(200).send()
    })
})
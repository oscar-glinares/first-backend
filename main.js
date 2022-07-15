const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

//middleware
app.use(express.json()); 
app.use(cors());

app.listen(PORT, () => console.log("Listening on " + PORT))

app.get("/api/get", (_req, res) => {
    res.status(200).send("Hello World")
})

app.post("/api/post/:id",(req, res) => {
    res.status(200).send("Posted message with id " + req.params.id)
})
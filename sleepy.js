const express = require("express")

const app = express()
app.set("view engine", "pug")

app.get("/", function(req, res) {
    res.render("index", {"title": "Turn my computer off!"})
});

app.post("/sleep", function(req, res) {
    res.render("sleep", {"title": "Success!"})
});

app.listen(9000)
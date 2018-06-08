const express = require("express")

const snark = [
    "Wow thanks, I was using that.",
    "A $100 usage fee has automatically been charged to your nearest checking account.",
    "Next time format your request using JSON",
    "Brought to you by Depression(tm), Insanity(tm), and Psychopathy(tm).",
    "Tip: You can tell it works if reloading the page fails.",
    "Why did I do this again?",
    "Was it really worth it?",
    "You realize I'm just going to turn back on again right?",
    "You just helped save a total of 1.45 μWh of electricity!",
    "I really appreciate it.",
    "I read all of your messages. Not by choice.",
    "I wonder if I should make a Twitch stream"
]

const app = express()
app.set("view engine", "pug")

app.get("/", function(req, res) {
    res.render("index", {"title": "Turn my computer off!"})
});

app.post("/sleep", function(req, res) {
    res.render("sleep", {"title": "Success!", "snark": snark[Math.floor(Math.random() * snark.length)]});
});

app.listen(9000)
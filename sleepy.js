const express = require("express")
const bodyParser = require('body-parser');
const notifier = require("node-notifier")
const exec = require("child_process").exec

// Logging function for exec
const puts = (error, stdout, stderr) => console.log(stdout)

// Snark for the sleep page
const snark = [
    "Wow thanks, I was using that.",
    "A $100 usage fee has automatically been charged to your nearest checking account.",
    "Next time format your request using JSON",
    "Brought to you by Depression(tm).",
    "Tip: You can tell it works if reloading the page fails.",
    "Tip: You can tell it works if it says it does.",
    "Why did I do this again?",
    "Was it really worth it?",
    "You realize I'm just going to turn back on again right?",
    "You just helped save a total of 1.45 μWh of electricity!",
    "I really appreciate it.",
    "I read all of your messages. Not by choice.",
    "I wonder if I should make a Twitch stream.",
    "Please hire me."
]

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "pug");

// Views
app.get("/", function(req, res) {
    res.render("index", {"title": "Turn my computer off!"});
});

app.post("/sleep", function(req, res) {
    if (!req.body) { return res.status(400).send("Invalid request. Must specify paramters"); }

    // Parse time
    const time = parseInt(req.body.time)
    if (time === NaN) { return res.status(400).send("Invalid request. Please specify a number for time.") }

    // Send notification
    if (req.body.message) { notifier.notify(req.body.message); }

    res.render("sleep", {"title": "Success!", "snark": snark[Math.floor(Math.random() * snark.length)]});
});

app.listen(9000)
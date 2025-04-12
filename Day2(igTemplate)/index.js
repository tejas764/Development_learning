const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// Middleware
app.use(express.static(path.join(__dirname, "public")));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Routes
app.get("/", (req, res) => {
    res.render("home");
    console.log(port);
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];

    if (data) {
        res.render("instagram", { data });
    } else {
        res.render("error");
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.listen(port, () => {
    console.log(`App is working properly on port ${port}`);
});

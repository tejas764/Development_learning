# 📄 Day 2: EJS Templating with Express 🚀

Welcome back to my Web Dev journey! Today I dived into **EJS (Embedded JavaScript)** templating engine.I tried to Make a basic template of instagram page . Here's what I learned and implemented! 😎

---

## 🧠 What is EJS?

**EJS (Embedded JavaScript)** is a simple templating language that allows you to generate dynamic HTML markup using plain JavaScript 🧩. It makes it easy to create reusable components, pass data to views, and include dynamic content on webpages.

> 🔗 EJS files have a `.ejs` extension and are typically placed inside a `views/` folder, as expected by Express.

---

## ✨ Key Concepts

### 📌 1. **Interpolation**
Interpolation means embedding JavaScript expressions inside the HTML. In EJS, this is done using:

```ejs
<h1>Welcome, <%= username %>!</h1>
```

`<%= %>` is used to insert variables or expressions that will be rendered into the HTML.

---

### 📌 2. **Includes**
EJS supports partials using `<%- include('filename') %>`, which allows you to **reuse components** like headers, footers, navbars, etc.

Example:
```ejs
<%- include('partials/header') %>
<main>
  <h1>Homepage</h1>
</main>
<%- include('partials/footer') %>
```

---

## 🛠️ Project Setup Steps

### 📁 Folder Structure
```
project-folder/
│
├── public/              → Static files (CSS, JS, images)
├── views/               → EJS templates
│   ├── home.ejs
│   ├── instagram.ejs
│   └── error.ejs
├── data.json            → Instagram mock data
└── index.js             → Main server file
```

### 📦 Setup Instructions

1. **Create a project folder**:
```bash
mkdir dir-ejs
cd dir-ejs
```

2. **Initialize Node.js project**:
```bash
npm init -y
```

3. **Install Express and EJS**:
```bash
npm install express ejs
```

---

## 📄 index.js - Code Overview

```js
const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/ig/:username", (req, res) => {
    const { username } = req.params;
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
    console.log(`✅ Server running on port ${port}`);
});
```

---

## 📚 Learnings

- 📄 How to render dynamic content with EJS
- 🧩 How to reuse components using partials
- 🌐 Routing using Express and extracting URL parameters
- 🧠 Passing JSON data into views


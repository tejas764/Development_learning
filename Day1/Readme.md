# 🚀 Day 1 – Backend Development Journey (Node.js + Express)

Welcome to my Web Development Backend journey!  
Today I explored **Node.js fundamentals**, **REPL**, the difference between `require` and `import`, and built my **first Express.js server**! 🙌

---

## 📌 Node.js
- Node.js is a **JavaScript runtime environment** used for **server-side programming**.
- It allows us to run JavaScript outside the browser.

### 🔄 REPL
- **REPL** stands for **Read-Eval-Print Loop**
- It is an interactive shell that processes Node.js commands.

---

## 🔗 `require` vs `import`
| `require` (CommonJS) | `import` (ES6) |
|----------------------|----------------|
| Used in older Node.js versions | Modern, ES6+ syntax |
| Imports the **entire module** | Can import **specific functions** |
| Synchronous | Can be asynchronous |
| Example: `const fs = require('fs')` | Example: `import { readFile } from 'fs'` |

📝 *It's better to stick to one system to avoid conflicts in your code.*

---

## 📚 Library vs Framework
- **Library**: A collection of prewritten code used to perform specific tasks (e.g., Lodash)
- **Framework**: A structured platform for building apps (e.g., Express.js)

---

## ⚡ Express.js Overview
Express is a minimal and flexible Node.js web application framework.

### 🔁 How Express Works:
1. **Listens** for incoming HTTP requests
2. **Parses** incoming request data
3. **Matches** the request to a route
4. **Responds** to the client

---

## 🧪 Basic Express App Code

```js
const express = require("express");
const app = express();
let port = 3000;

// Middleware for logging every request
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

// Route
app.get("/", (req, res) => {
    res.send("<h1>Hello Tejas from Express!</h1>");
});

// Listen on port
app.listen(port, () => {
    console.log(`App is running properly on port ${port}`);
});

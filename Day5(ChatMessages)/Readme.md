
# 📦 MongoDB Crash Notes

## 🗃️ MongoDB Basics

- **Casing Style:** `camelCase`
- **Shell:** `mongosh` (Mongo Shell)
- **Default Test Database:** `test` (temporary data created by MongoDB)
- **Current DB Reference:** `db`
- **Supported Data Formats:**  
  - `JSON` (JavaScript Object Notation)  
    - 📝 Text-based  
    - ❌ Space inefficient  
  - `BSON` (Binary JSON)  
    - ⚙️ Machine-readable only  
    - ✅ Space efficient

### 📄 Documents

- MongoDB stores data in **documents**.
- Each document is in `{ key: value }` format.
- A collection is a group of related documents.

---

## 🔧 CRUD Operations in MongoDB

| Operation | Syntax Example | Description |
|----------|----------------|-------------|
| **C - Create** | `db.collection.insertOne({ name: "John" })` | Inserts one document |
|               | `db.collection.insertMany([...])` | Inserts multiple documents |
| **R - Read**   | `db.collection.find({})` | Finds all documents |
|               | `db.collection.find({ name: "John" })` | Filters based on condition |
| **U - Update** | `db.collection.updateOne({ name: "John" }, { $set: { age: 30 } })` | Updates one document |
|               | `db.collection.updateMany(...)` | Updates multiple documents |
| **D - Delete** | `db.collection.deleteOne({ name: "John" })` | Deletes one document |
|               | `db.collection.deleteMany(...)` | Deletes multiple documents |

---

## 🧩 Mongoose Overview

> Mongoose is an **npm library** that provides a straight-forward, schema-based solution to model your application data for MongoDB. It works great with `Node.js` and `EJS` runtime environments.

### 📘 Key Features

- 🔗 Connects MongoDB with Node.js apps
- 🧬 ODM (Object Data Modeling) library
- ⚙️ Handles models, schema definitions, and operation buffering
- 🧠 Simplifies validation, casting, and business logic

### 📌 Common Concepts

- **Schemas:** Blueprint of your document
- **Models:** Wrapper on top of schema for creating and retrieving documents
- **Middleware:** Functions triggered before or after data operations
- **Validation:** Ensures data consistency

---

## ✅ Sample Mongoose Code

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDatabase");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const newUser = new User({ name: "Alice", age: 25 });
newUser.save();
```

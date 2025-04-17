
# 🧠 REST APIs & CRUD Operations

## 🌐 What is REST?

REST stands for **Representational State Transfer**.  
It is an **architectural style** that defines a set of **constraints and principles** to be used for creating **web services**.

✨ REST provides:
- A standard structure for APIs
- Clear rules for client-server communication
- Resource-based routing via URLs

---

## 🔁 CRUD Operations

CRUD stands for:

| Operation | HTTP Method(s) | Description        |
|-----------|----------------|--------------------|
| 🆕 Create   | `POST`         | Add new data       |
| 📖 Read     | `GET`          | Retrieve data      |
| ✏️ Update   | `PUT` / `PATCH`| Modify existing data |
| ❌ Delete   | `DELETE`       | Remove data        |

---

## 🆔 UUID (Universally Unique Identifier)

UUIDs are used to generate **unique IDs** for each resource (like posts, users, etc.).

Example:
```js
const { v4: uuidv4 } = require('uuid');
const id = uuidv4(); // => '3c98b3e1-723c-41f6-8451-8c75b0e59714'
```

UUIDs are super useful in CRUD applications to keep track of items uniquely across time and space 🚀

---

## 🛠️ Method Override

HTML forms only support `GET` and `POST` methods.  
To simulate `PUT`, `PATCH`, and `DELETE`, we use **method-override** middleware in Express.

### Setup:
```js
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
```

### Usage in HTML:
```html
<form method="POST" action="/posts/123?_method=DELETE">
    <button>Delete</button>
</form>
```

This allows us to build **full RESTful APIs** using HTML forms 🧙‍♂️

---

## 💬 Summary

- ✅ REST helps structure web APIs in a predictable, scalable way
- 🔄 CRUD defines operations to interact with your data
- 🔑 UUIDs give your resources unique identities
- 🔁 `method-override` helps simulate HTTP verbs not natively supported by forms


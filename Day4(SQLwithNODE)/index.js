const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");


//use
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

//routes
app.get("/",(req,res)=>{
    res.render("index.ejs");
})
// Creating connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "employee",
    password: "1234"
});

// Generate a fake user
let createFakeUser = () => {
    return [
        faker.internet.userName(), 
        faker.number.int({ min: 1000, max: 9999 }) 
    ];
};

// SQL query
const q = "INSERT INTO employee(name, Empid) VALUES (?, ?)";
const user = createFakeUser();

try {
    connection.query(q, user, (err, result) => {
        if (err) throw err;
        console.log("Insert result:", result);
        connection.end();
    });
} catch (err) {
    console.log("Error:", err);
}

//listining
app.listen(port,()=>{
    console.log("listening port 8080");
});
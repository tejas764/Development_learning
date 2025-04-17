const express=require("express");
const app=express();
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

const port=8080;
const path=require("path");

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:true}));//for handling url string
app.set("view engine","ejs");//ejs set

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[{
    id:uuidv4(),
    username :"Tejas",
    content:"Hello world"},
   {id:uuidv4(),
    username :"Tejas",
    content:"I don't love coding"}
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
    //res.send("server working");
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
    //res.send("server working");
});

app.get("/post/detail",(req,res)=>{
    let { id }=req.params;
    let post=post.find((p)=>id===p.id);
    res.render("detail.ejs",{post});
})

app.post("/posts/new", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    //res.send("server working");
    res.redirect("http://localhost:8080/posts");
});

app.patch("/posts/:id/edit",(req,res)=>{
    let { id } = req.params;
    let newContent=req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content=newContent;
    res.redirect("http://localhost:8080/posts");
    res.send("server working");
    console.log({post})});


app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) return res.status(404).send("Post not found");
    res.render("edit.ejs", {  post }); // or use 'post' and fix EJS
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log("post 8080 is working fine");
});
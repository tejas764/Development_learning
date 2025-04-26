const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat");

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


// Connect to MongoDB
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');
}
main()
    .then(() => console.log("Connection successful"))
    .catch((err) => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true }));


// Setup EJS and Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.send("Working ✅");
});

app.get("/chats", async (req, res) => {
    try {
        const allchats = await Chat.find();
        res.render("index", { allchats });
    } catch (error) {
        res.status(500).send("Error fetching chats");
    }
});

app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/chats/add", async (req, res) => {
    try {
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from,
            to,
            msg,
            created_at: new Date(),
        });
        await newChat.save();
        res.redirect("/chats");
    } catch (err) {
        console.error("Error adding chat:", err);
        res.status(500).send("Error adding chat.");
    }
});

app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let edit = await Chat.findById(id);
    res.render("edit.ejs", { edit });
});

app.put("/chats/:id", async (req, res) => {
    
        let { id } = req.params;
        let { msg:msg } = req.body;
        console.log(msg);
        const updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg:msg },
            { new: true, runValidators: true }
        );
        //res.redirect("/chats");
    
});

//destroy
app.delete("/chats/:id/delete", async (req, res) => {
    try {
        let { id } = req.params;
        await Chat.findByIdAndDelete(id);
        console.log("Chat deleted:", id);
        res.redirect("/chats");
    } catch (err) {
        console.error("Error deleting chat:", err);
        res.status(500).send("Error deleting chat.");
    }
});


app.listen(8080, () => {
    console.log("Port 8080 is working ✅");
});

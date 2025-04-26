const mongoose = require("mongoose");
const Chat = require("./models/chat"); 

main()
    .then(() => console.log("Connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');
}

let allChat=[
    {
        from:"neha",
        to:"ayush",
        msg:"kassaa aahe tu",
        created_at: new Date()
    },
    {
        from:"shubham",
        to:"ayushmann",
        msg:"Me chann ahe",
        created_at: new Date()
    },
    {
        from:"sunder",
        to:"jethu",
        msg:"Majhama bhidu",
        created_at: new Date()
    },
    {
        from:"bhide",
        to:"sodi",
        msg:"partyy shartyy",
        created_at: new Date()
    },
];
Chat.insertMany(allChat);

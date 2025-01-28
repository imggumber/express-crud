const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.listen(3333, ()=>{
    console.log("hello there");
});
// Connection string
const DB_URI = 'mongodb+srv://gumbergurpreet:PThtcCxVdIZolkCt@cluster0.xzgs6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(DB_URI)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.error("MongoDB connection failed", err));

app.get('/', (req, res)=> {
    res.send("hello i am get request");
});




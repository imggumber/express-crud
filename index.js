// Import env file
require('dotenv').config();

// Env constants
const DB_CONNECTION = process.env.DB_CONNECTION;
const PORT = process.env.PORT || 3000;

// Add express
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.listen(PORT, ()=>{
    console.log("hello there");
});

// Connect to MongoDB
mongoose.connect(DB_CONNECTION)
    .then(() => console.log("Connected"))
    .catch((err) => console.error("Connection failed", err));

app.get('/', (req, res)=> {
    res.send("hello i am get request");
});




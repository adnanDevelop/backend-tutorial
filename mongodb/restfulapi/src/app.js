const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const user = require('./student/student');

mongoose.connect("mongodb://localhost:27017/student").then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json())    

app.post("/data" , async(req , res) => {
    try{

    } catch(e) {
        console.log(e);
    }
})
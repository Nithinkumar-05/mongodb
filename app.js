const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require('./connection/database');
const studentRouter = require('./Routes/studentRouter');
const stModel  = require('./models/studentModels');
require('dotenv').config();

const port = process.env.PORT || 3100;

const app = express();
connectDB();



app.use("/api/students",studentRouter);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res)=>{
    console.log("Home Page");
    res.write("Hii connection successful");
    res.end();
})


app.listen(port,()=>{
    console.log(`Server is listening to the port ${port}`);
})



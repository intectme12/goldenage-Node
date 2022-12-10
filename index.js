const express = require("express");
const app = express();
const port = 7070;

const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://admin:admin@goldenage.8uogmak.mongodb.net/?retryWrites=true&w=majority', {})
.then(()=>console.log("mongoDB connected.."))
.catch(()=>console.log("error..."));

app.get("/", (req,res)=>res.send("superbee man~"));

app.listen(port, (req,res)=>console.log("server start..."));
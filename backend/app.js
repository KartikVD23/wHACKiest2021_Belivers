const express=require("express");
var app=express();
var mongoose=require('mongoose');
const dotenv=require("dotenv");
const routeurls=require('./routes/routes');
const cors=require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Database connected"));

app.use(express.json());
app.use(cors());
app.use('/app',routeurls);
app.listen(4000,()=>console.log("app is serving at port 4000"));



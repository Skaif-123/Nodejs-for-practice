require("dotenv").config();
const express= require("express");
const connectToDB=require("./database/db");
const app=express();
const port=process.env.PORT||3000;




connectToDB();

app.use(express.json());
app.listen(port,()=>{
    console.log("Server is now running at port",port);
})
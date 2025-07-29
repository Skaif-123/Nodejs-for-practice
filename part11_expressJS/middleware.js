const express=require("express");
const app=express();

function firstMiddleware(req,res,next){
    console.log("middleware is running");
    next();
}

app.use(firstMiddleware);
app.get("/",(req,res)=>{
    res.send("Home Page")
});

app.listen(3000,()=>{
    console.log(`we are listening at 3000`);
});


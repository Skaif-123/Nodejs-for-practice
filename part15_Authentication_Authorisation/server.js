require("dotenv").config();
const express=require("express");
const app= express();
const ConnectToMongoDB=require("./database/db");
ConnectToMongoDB();
app.use(express.json());

const auth_routes=require("./routes/auth-routes");
app.use("/api/auth",auth_routes);


PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);  
});


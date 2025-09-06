require("dotenv").config();
const express=require("express");
const app= express();
const ConnectToMongoDB=require("./database/db");
ConnectToMongoDB();
app.use(express.json());

const auth_routes=require("./routes/auth-routes");
const home_routes=require("./routes/home-routes");
const admin_routes=require("./routes/admin-routes")
app.use("/api/auth",auth_routes);
app.use("/api/home",home_routes);
app.use("/api/admin",admin_routes);


PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);  
});


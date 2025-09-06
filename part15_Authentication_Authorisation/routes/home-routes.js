const express= require("express");
const router=express.Router();
const authMiddleWare=require("../middleware/auth_middleware");
const adminMiddleWare=require("../middleware/admin_middleware");

router.get("/users",authMiddleWare,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to homepage",
    })
})

module.exports=router;
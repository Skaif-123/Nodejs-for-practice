const express= require("express");
const router=express.Router();
const authMiddleWare=require("../middleware/auth_middleware");
const adminMiddleWare=require("../middleware/admin_middleware");

router.get("/welcome",authMiddleWare,adminMiddleWare,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to Admin Page",
    })
});

module.exports=router;
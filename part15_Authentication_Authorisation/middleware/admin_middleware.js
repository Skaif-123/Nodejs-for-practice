const isAdminUser=(req,res,next)=>{
    if(req.userInfo.role !=="admin"){
        res.status(403).json({
            success:false,
            message:"Access Denied! Admin User needed",
        })
    }

    next();
}


module.exports=isAdminUser;
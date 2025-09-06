const jwt=require("jsonwebtoken");
const authMiddleWare=(req,res,next)=>{
    const authHeader=req.headers["authorization"];
    // console.log(authHeader)

    const token=authHeader && authHeader.split(" ")[1]
    // console.log(token);

    if(!token){
        res.json({
            success:false,
            message:"Access Denied. No token found. Please login to continue",
        })
    }

    try {
        var decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        console.log(decodedToken);
        // userInfo is just like a variable in which we have passed our data
        req.userInfo=decodedToken;
        next();
        

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"something went wrong",
        })
    }
    

    
}



module.exports=authMiddleWare;
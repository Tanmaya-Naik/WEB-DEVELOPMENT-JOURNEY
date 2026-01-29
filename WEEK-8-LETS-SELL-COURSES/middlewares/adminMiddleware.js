const jwt=require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD}=require("../config");




function adminMiddleware(req,res,next){
    const token=req.headers.token;
    const decodedinfo=jwt.verify(token,JWT_ADMIN_PASSWORD);

    if(decodedinfo){
        req.userId=decodedinfo.id;
        next();
    }else{
        res.status(403).json({
            message:"YOu are not signed in"
        });
    }
}

module.exports={
   adminMiddleware:adminMiddleware
}
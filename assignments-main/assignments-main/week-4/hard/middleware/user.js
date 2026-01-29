const jwt=require("jsonwebtoken");
const JWT_SECRET=process.env.JWT_SECRET;

function userMiddleware(req, res, next) {
    // Implement user auth logic
    const token=req.headers.token;
    try{
    const decodedInformation=jwt.verify(token,JWT_SECRET);

    if(decodedInformation){
        req.userId=decodedInformation.id;
        next();
    }
}
    catch(err){
        res.status(403).json({
            message:"Incorrect credential"
        });
    }
}



module.exports = userMiddleware;
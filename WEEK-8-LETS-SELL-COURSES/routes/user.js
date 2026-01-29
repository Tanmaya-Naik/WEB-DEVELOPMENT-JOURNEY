// const express=require("express");  //THIS RETURN YOU AN OBJECT WITH LOTS OF KEY 
// const Router=express.Router;//OUT OF LOTS OF KEY ROUTER IS ONE OF THEM AND WE USE THAT 

// const {Router}=require("express");//This one line do the work that above 2 line does

// const userRouter=Router();
const mongoose = require("mongoose");

const {Router}=require("express");
const userRouter=Router();
const {userModel,purchaseModel}=require("../database/db");
const { userMiddleware } = require("../middlewares/usermdleware");
// userRouter.use(adminMiddleware);
const bcrypt=require("bcrypt");
const {z}=require("zod");
const jwt=require("jsonwebtoken");

const {JWT_USER_PASSWORD}=require("../config");

userRouter.post("/signup",async function (req,res){
      const requiredBody=z.object({
        email:z.string().min(5).max(30).email(),
        password:z.string().min(5).max(30),
        firstname:z.string().min(3).max(20),
        lastname:z.string().max(20)
    });

    const parseDatawithSuccess=requiredBody.safeParse(req.body);

    if(!parseDatawithSuccess.success){
        res.status(403).json({
             message:"Incorrect format",
            error: parseDatawithSuccess.error
        });
        return;
    }
    const {email,password,firstname,lastname}=req.body;

    try {
        const hashedPassword=await bcrypt.hash(password,5);
        await userModel.create({
            email:email,
            password:hashedPassword,
            firstname:firstname,
            lastname:lastname
        });

    } catch (e) {
         return res.status(400).json({ message: "Email not found" });
    }
        res.json({ message: "User created successfully  babu tanu " });
});

userRouter.post("/signin",async function(req,res){
    const {email,password}=req.body;

    const user=await userModel.findOne({
        email:email
    });

    if(!user){
        res.status(403).json({
            message:"Email already exist"
        });
        return;
    }

    const passwordMatching=await bcrypt.compare(password,user.password);

    if(passwordMatching){
        const token=jwt.sign({
            id:user._id.toString()
        },JWT_USER_PASSWORD);
    //DO COOKIE BASE AUTHENTICATION BRO HERE
         res.json({
            token:token
        });
    }
    else{
         res.status(403).json({
            message: "Incorrect password and email"
        });
    }
});


userRouter.get("/seeowncourse", userMiddleware, async function (req,res){
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId: new mongoose.Types.ObjectId(userId)
    }).populate("courseId");

    res.json({
        courses: purchases.map(p => p.courseId)
    });
});





module.exports={
    userRouter:userRouter
}

//we are not exporting the const JWT_USER_PASSWORD="jaishreeram"; from here and import it in the 
//usermiddleware because it create a circular dependencies so read about circlualr dependency
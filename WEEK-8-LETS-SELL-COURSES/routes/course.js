const {Router}=require("express");
const { userMiddleware } = require("../middlewares/usermdleware");
const {purchaseModel, courseModel}=require("../database/db");

const courseRouter=Router();

const mongoose = require("mongoose");

courseRouter.post("/buycourse", userMiddleware, async function (req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId: new mongoose.Types.ObjectId(userId),
        courseId: new mongoose.Types.ObjectId(courseId)
    });

    res.json({
        message:"You have successfully bought the course"
    });
});


courseRouter.get("/seeallcourses", async function (req,res){
    const courses=await courseModel.find({});
       res.json({
       courses
    })

})

module.exports={
    courseRouter:courseRouter
}
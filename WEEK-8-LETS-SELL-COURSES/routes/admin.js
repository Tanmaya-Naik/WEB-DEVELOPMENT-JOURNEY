const {Router}=require("express");
const adminRouter=Router();
const {AdminModel, courseModel}=require("../database/db");
const {adminMiddleware}=require("../middlewares/adminMiddleware")

const bcrypt=require("bcrypt");
const {z}=require("zod");
const jwt=require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD}=require("../config");

adminRouter.post("/signup",async function (req,res){
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
        await AdminModel.create({
            email:email,
            password:hashedPassword,
            firstname:firstname,
            lastname:lastname
        });

    } catch (e) {
         return res.status(403).json({ message: "Email already exists" });
    }
        res.json({ message: "User created successfully" });
});
adminRouter.post("/signin",async function (req,res){
    const {email,password}=req.body;

    const user=await AdminModel.findOne({
        email:email
    });

    if(!user){
       return res.status(403).json({
            message:"Email not found"
        });
    }

    const passwordMatching=await bcrypt.compare(password,user.password);

    if(passwordMatching){
        const token=jwt.sign({
            id:user._id.toString()
        },JWT_ADMIN_PASSWORD);

        res.json({
            token:token
        })
    }
    else{
        res.json({
             message: "Incorrect password and email"
        });
    }

});
adminRouter.post("/create",adminMiddleware,async function(req,res){
      const adminId=req.userId;


      const { title, description, price, imageurl }=req.body;

      const course=await courseModel.create({
        title:title,
        description:description,
        imageurl:imageurl,
        price:price,
        creatorId:adminId

      })

      res.json({
        message:"course created",
        CourseId:course._id
      })
})
adminRouter.put("/course",adminMiddleware,async function (req,res){
    const adminId=req.userId;

    const {title, description, imageurl,price,CourseId}=req.body;

    // const course=await courseModel.findOne({
    //     _id:CourseId,
    //     creatorId:adminId
    // })
   //this above explictly check this couse one want to update belong to him or not



    const course=await courseModel.updateOne({
        _id:CourseId,
        creatorId:adminId  //this is so improtant guess why because only creator of the course cna chnage only course of him only not of other course

    },{title:title,
        description:description,
        imageurl:imageurl,
        price:price
    })

    res.json({
        message:"Course data changed successfully",
        CourseId:course._id
    })


})
adminRouter.get("/course/bulk",adminMiddleware,async function (req,res){
     const adminId=req.userId
    const courses=await courseModel.find({
        creatorId:adminId  //this is so improtant guess why because only creator of the course cna chnage only course of him only not of other course

    });

    res.json({
        message:"Here your course",
         courses
    })

})

module.exports={
    adminRouter:adminRouter
}


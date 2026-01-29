//  start writing your code from here
const {Router}=require("express");
const router=Router();
const JWT_SECRET=process.env.JWT_SECRET;
const userMiddleware=require("../middleware/user");
const { User, Todo }=require("../db/index");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const {z}=require("zod");


router.post('/signup',async (req,res)=>{
    const requiredBody=z.object({
        name:z.string().min(2).max(50),
        password:z.string().min(5).max(50),
        email:z.string().email()
    });

    const parseDatawithSuccess=requiredBody.safeParse(req.body);

    if(!parseDatawithSuccess.success){
        res.status(403).json({
            message:"Incorrect input format",
            error:parseDatawithSuccess.error
        });
        return;
    }

    const {name,password,email}=req.body;

    try{
        const hashedpassword=await bcrypt.hash(password,5);

        await User.create({
            name:name,
            password:hashedpassword,
            email:email
        });
    }
    catch(e){
        return res.status(400).json({
            message:"Email already exist"
        });
    }
    res.json({ message: "User created successfully" });
});

router.post('/login',async (req,res)=>{
    const {email,password}=req.body;

    try{
         const user=await User.findOne({email:email});

         if(!user){
            return res.status(404).json({
                message:"User does no exist"
          });
         }

         const passwordMatching=await bcrypt.compare(password,user.password);

         if(!passwordMatching){
            return res.status(403).json({
                message:"Incorrect email or password"
            });
         }

         const token=jwt.sign({
            id:user._id.toString(),
            email:user.email
         },JWT_SECRET);

         return res.status(200).json({
            message:"User login Successfull",
            token:token
         });

    }
    catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        });
    }
});

router.get('/owntodos',userMiddleware,async (req,res)=>{
    try{
        const todos=await Todo.find({
            userId:req.userId
        });

         res.json({
            message:"Fetched todos successfully",
            todos:todos
        });
    }
    catch(err){
        return res.status(500).json({
            message:"Error during fetching the todo"
        });
    }
});

module.exports = router

const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Todo } = require("../database");
const JWT_SECRET = process.env.JWT_SECRET;
const jwt=require("jsonwebtoken");

// Import bcrypt for hashing passwords (to store passwords securely instead of plain text)
const bcrypt = require("bcrypt");

// Import zod for validating incoming data (ensures correct data format)
const { z } = require("zod");




// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
  const requiredBody=z.object({
    name:z.string().min(3).max(50),
    password:z.string().min(5).max(100),
    email:z.string().min(5).max(100).email()
  });

  const parseDatawithSuccess=requiredBody.safeParse(req.body);

  if(!parseDatawithSuccess.success){
    res.status(403).json({
        message:"Incorrect format",
        error: parseDatawithSuccess.error
    });
    return;
  }
     const name=req.body.name;
     const password=req.body.password;
     const email=req.body.email;


         try {
             // Hash the password (5 salt rounds = how strong the hashing will be)
             const hashPassword = await bcrypt.hash(password, 5);
             console.log(hashPassword); // Just for debugging (remove in production)
     
             // Store the user in the database with hashed password
             await User.create({
                 name: name,
                 password: hashPassword,
                 email: email
             });
         }
          catch (e) {
             // If user already exists (email is unique), send error
             return res.status(400).json({ message: "Email already exists" });
         }

       res.json({ message: "User created successfully" });

});

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({
                message: "User does not exist in the database"
            });
        }

        const passwordMatching = await bcrypt.compare(password, user.password);

        if (!passwordMatching) {
            return res.status(403).json({
                message: "Incorrect email or password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id.toString(),
                email: user.email
            },
            JWT_SECRET
        );

        return res.json({
            message: "Login successful",
            token: token
        });

    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });
    }
});


router.get('/todos', userMiddleware,async (req, res) => {
    // Implement logic for getting todos for a user
    try{
        const todos=await Todo.find({
            userId:req.userId
        });
        res.json({
            message:"Fetched todos successfully",
            todos:todos
        });
    }  catch(err){
        res.status(500).json({
            message:"Error during fetching todos"
        });
    }
});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
    //On logout, the frontend just deletes the token from
    //  localStorage or cookies.Backend can respond with a success message.
    res.json({
        message:"User logged out successfully"
    });
});

module.exports = router
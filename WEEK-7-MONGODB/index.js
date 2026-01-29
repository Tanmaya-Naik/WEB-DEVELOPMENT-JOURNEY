// Import the Express framework to create a server and handle HTTP routes
const express = require("express");

// Import our MongoDB models (UserModel for storing users, TodoModel for storing todos)
const { UserModel, TodoModel } = require("./database");

// Import JWT library for creating and verifying tokens (used for authentication)
const jwt = require("jsonwebtoken");

// Secret key used to sign and verify JWT tokens (keep this secret in production)
const JWT_SECRET = "ilovetanu";

// Import Mongoose for interacting with MongoDB
const mongoose = require("mongoose");

// Import bcrypt for hashing passwords (to store passwords securely instead of plain text)
const bcrypt = require("bcrypt");

// Import zod for validating incoming data (ensures correct data format)
const { z } = require("zod");

// Connect to MongoDB database (replace with your own connection string in production)
mongoose.connect("mongodb+srv://tanmayanaik2020:Tanu123mongodb@cluster0.3so0121.mongodb.net/todo-app-database");

// Create an Express application
const app = express();

// Middleware to parse JSON request bodies into JavaScript objects
app.use(express.json());

/*
========================
        SIGNUP
========================
This route allows a new user to create an account.
It validates the input, hashes the password, and stores the user in the database.
*/
app.post("/signup", async function (req, res) {
    // Define what the request body should look like using zod schema
    const requiredBody = z.object({
        name: z.string().min(3).max(100),       // name: 3–100 characters
        password: z.string().min(3).max(30),    // password: 3–30 characters
        email: z.string().min(3).max(100).email() // email: must be valid format
    });

    /*
    Example valid request body:
    {
        "name": "John Doe",
        "password": "securepass123",
        "email": "john@example.com"
    }
    */

    // Validate input (safeParse returns success=false if invalid, instead of throwing an error)
    const parseDatawithSuccess = requiredBody.safeParse(req.body);

    // If validation fails, send error message back
    if (!parseDatawithSuccess.success) {
        res.json({
            message: "Incorrect Format",
            error: parseDatawithSuccess.error
        });
        return; // stop execution here
    }

    // Extract values from request body
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;

    try {
        // Hash the password (5 salt rounds = how strong the hashing will be)
        const hashPassword = await bcrypt.hash(password, 5);
        console.log(hashPassword); // Just for debugging (remove in production)

        // Store the user in the database with hashed password
        await UserModel.create({
            name: name,
            password: hashPassword,
            email: email
        });
    } catch (e) {
        // If user already exists (email is unique), send error
        return res.status(400).json({ message: "Email already exists" });
    }

    // Send success message
    res.json({
        message: "You are logged in"
    });
});

/*
========================
        SIGNIN
========================
This route allows existing users to log in.
It checks if the user exists, compares the entered password with the hashed one,
and generates a JWT token if credentials are correct.
*/
app.post("/signin", async function (req, res) {
    // Extract email and password from request body
    const password = req.body.password;
    const email = req.body.email;

    // Check if a user exists with the given email
    const user = await UserModel.findOne({
        email: email
        // NOTE: We do NOT check password here because it's hashed in the database
    });

    // If no user found, return error
    if (!user) {
        res.status(403).json({
            message: "This email user does not exist in the database"
        });
        return;
    }

    console.log(user); // Debug info (remove in production)

    // Compare entered password with stored hashed password
    const passwordMatching = await bcrypt.compare(password, user.password);

    // If password matches, generate a JWT token for the user
    if (passwordMatching) {
        const token = jwt.sign(
            { id: user._id.toString() }, // Store user ID inside token
            JWT_SECRET                   // Sign token with our secret key
        );

        res.json({
            token: token // Send token back to client
        });
    } else {
        // If password does not match, return error
        res.status(403).json({
            message: "Incorrect password and email"
        });
    }
});

/*
========================
    AUTH MIDDLEWARE
========================
This function protects routes from unauthorized access.
It checks if a valid token is provided in the request headers.
If valid → attaches userId to req and calls next().
If invalid → sends error message.
*/
function auth(req, res, next) {
    const token = req.headers.token; // Read token from request headers
    const decodedInformation = jwt.verify(token, JWT_SECRET); // Verify token

    if (decodedInformation) {
        req.userId = decodedInformation.id; // Save user ID for next function
        next(); // Continue to next route handler
    } else {
        res.status(403).json({
            message: "Incorrect credential"
        });
    }
}

/*
========================
        ADD TODO
========================
This route allows logged-in users to create a todo.
It uses the auth middleware to ensure the user is authenticated.
*/
app.post("/todo", auth, function (req, res) {
    const userId = req.userId;   // Retrieved from auth middleware
    const title = req.body.title; // Todo title

    // Create todo linked to the logged-in user
    TodoModel.create({
        title,
        userId
    });

    res.json({
        userId: userId
    });
});

/*
========================
    GET USER'S TODOS
========================
This route returns all todos for the logged-in user.
*/
app.post("/todos", auth, async function (req, res) {
    const userId = req.userId;

    // Find all todos belonging to this user
    const todos = await TodoModel.find({
        userId: userId
    });

    // Send todos as JSON
    res.json({
        todos: todos
    });
});

// Start the server and listen on port 3000
app.listen(3000);

// NOTE: In a large project, move 'auth' middleware to a separate file for better organization.








































//---------------------------------------YOUR ORGINAL CODE---------------------------------------------

// const express=require("express");
// const { UserModel,TodoModel } =require("./database");
// const jwt=require("jsonwebtoken");
// const JWT_SECRET="ilovetanu";
// const mongoose=require("mongoose");

// const bcrypt=require("bcrypt");
// const { z }=require("zod");

// mongoose.connect("mongodb+srv://tanmayanaik2020:Tanu123mongodb@cluster0.3so0121.mongodb.net/todo-app-database")

// const app=express();

// app.use(express.json());

// app.post("/signup",async function(req,res){
//     //LETS DEFINE THE SCHEMA IN A ZOD OBJECT

//     const requiredBody=z.object({
//         name:z.string().min(3).max(100),
//         password:z.string().min(3).max(30),
//         email:z.string().min(3).max(100).email() 
//     })

//     /*  INPUT VALIDATION
//     req.body
//     {
//          email:string,
//          password:string,
//          name:string
//     }
//     */

//     //TWo type we can parse the data
//                 // const parseData=requiredBody.parse(req.body);//req.body is the input body and requiredbody is the schema

//     const parseDatawithSuccess=requiredBody.safeParse(req.body);
//     if(!parseDatawithSuccess.success){
//         res.json({
//             message:"Incorrect Format",
//             error:parseDatawithSuccess.error
//         })
//         return
//     }
//     const name=req.body.name;//string
//     const password=req.body.password;//string
//     const email=req.body.email;//string

//     try{
//     const hashPassword=await bcrypt.hash(password,5);//How hard the hashpassword you want so give number accordin to it
//     console.log(hashPassword);
    
//     //this insert function is asynchronus function it return promise
//     await UserModel.create({
//         name:name,
//         password:hashPassword,
//         email:email
//     });
//     } catch (e) {
    
//     return res.status(400).json({ message: "Email already exists" });
// }

//     res.json({
//         message:"You are logged in"
//     })
    
// });

// //check is there any user with the enter email and password
// //all database call should be await
// app.post("/signin",async function(req,res){
//     const password=req.body.password;
//     const email=req.body.email;

//     const user=await UserModel.findOne({
//         email:email
//         // password:password       //THIS IS NOT NEEDED IN THE HASH APPROACH
//     })

//     if(!user){
//         res.status(403).json({
//             message:"This email user is not exist in the database"
//         })
//         return
//     }

//     console.log(user);
//     const passwordMatching=await bcrypt.compare(password,user.password);//user.password is the hased password
//   //this comapre function return an promise so always we need to await
    

//     if(passwordMatching){
//         const token=jwt.sign({
//             id:user._id.toString()
//         },JWT_SECRET);
//         res.json({
//             token:token
//         });
//     }
//     else{
//         res.status(403).json({
//             message:"incorrect password and email"
//         })
//     }

// });

// function auth(req,res,next){
//     const token=req.headers.token;
//     const decodedInformation=jwt.verify(token,JWT_SECRET);
//     if(decodedInformation){
//         req.userId=decodedInformation.id;
//         next();
//     }
//     else{
//         res.status(403).json({
//             message:"incorrect credential"
//         })
//     }

// }
// app.post("/todo",auth,function(req,res){
//       const userId=req.userId;
//       const title=req.body.title;

//       TodoModel.create({
//         title,
//         userId
//       })

//       res.json({
//         userId:userId
//       })

// });


// app.post("/todos", auth, async function(req, res) {
//     const userId = req.userId;
//     const todos = await TodoModel.find({
//         userId: userId
//     });
      
//     res.json({
//         todos: todos
//     });
// });


// app.listen(3000);
// //write the auth in another file bro and export from there and import here
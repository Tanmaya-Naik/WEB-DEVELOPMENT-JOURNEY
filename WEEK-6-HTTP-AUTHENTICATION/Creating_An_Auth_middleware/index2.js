
//AFTER FOLLOW ALONG WITH HARKU DONT FORGOT TO CODE THIS OF YOUR OWN ONCE WITH THINKING OF LOGIC WITHOUT SEEING FREQUENTLY
const express=require("express");
//HERE YOUR EXPRESS LIBRARY RETURN AN FUNCTION UPON RUNNING REQUIRE("EXPRESS") AND WE CALL THIS FUNCTION TO CREATE AN INSTANCE OF THIS
const JWT_SECRET="noob";
const jwt=require("jsonwebtoken");
const path=require("path");
const app=express();
app.use(express.static("public")); 
app.use(express.json()); //THIS IS A MIDDLEWARE ---------request body means user name and password if you dont use this

const users=[];


function logger(req,res,next){
    console.log(`${req.method} request came`);
    next();
}

//LETS RETURN OUR HTML FROM BACKEND 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.post("/signup",logger, function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    if(password.length<5){
        res.json({
            message:"Your password is very small Make is complex"
        })
        return;
    }
    users.push({
        username:username,
        password:password
    })

    res.send("You are signed Up successfully")
  
})

app.post("/signin",logger, function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    let founduser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username ===username && users[i].password===password){
            founduser=users[i]
        }
    }

    if(founduser){
        const token=jwt.sign({
            username:founduser.username
        },JWT_SECRET);     //NOW WE WANT TO CONVERT THE USERNAME TO THE JWT 
        // founduser.token=token;
        res.json({
            token:token
        })
    }
    else{
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
   
})


//CREATE A AUTH MIDDLEARE THAT CHECK THE USER IS LOGED IN OR NOT
function auth(req,res,next){
    const token=req.headers.token;
    const decodedInformation=jwt.verify(token,JWT_SECRET);
    if(!token){
        res.json({
            message:"You are not send the token"
        })
    }
    if(decodedInformation.username){
        //so here pass the username to all the end point
        req.username=decodedInformation.username;
        next();
    }
    else{
        res.json({
            message:"You are not logged in"
        })
    }
    //ONE CATCH HERE IS THAT THIS MIDDLEWARE SHOULD SEND THE DECODED USERNAME TO THE REST EDNPOINT SO THAT THEY CAN ALSO KNOW AND GET THE USERNAME

}
app.get("/me",auth,logger,function(req,res){

    let founduser=null;
    //If we already signin then add that user in founduser and then extractt the name and password
    for(let i=0;i<users.length;i++){
        if(users[i].username===req.username){
            founduser=users[i];//return username and password 
        }
    }

    
   
        res.json({
            username:founduser.username,
            password:founduser.password
        })
})



app.listen(3007); //this ensure that the http server is runnning on port 3000
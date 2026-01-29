// //AFTER FOLLOW ALONG WITH HARKU DONT FORGOT TO CODE THIS OF YOUR OWN ONCE WITH THINKING OF LOGIC WITHOUT SEEING FREQUENTLY
// const express=require("express");
// //HERE YOUR EXPRESS LIBRARY RETURN AN FUNCTION UPON RUNNING REQUIRE("EXPRESS") AND WE CALL THIS FUNCTION TO CREATE AN INSTANCE OF THIS

// const app=express();
// app.use(express.json()); //THIS IS A MIDDLEWARE ---------request body means user name and password if you dont use this

// const users=[];
// //[
// //    {username:"Tanu",password:"123"}
// //
// //]

// function GenerateToken(){
//     //Randomly generate string
//     // return Math.random();//THIS MATH.RANDOM FUNCTION GIVES YOU A RANDOM NUMBER BETWEEEN 0-1 VERY LONG BUT WE DONT USE IT HERE CAUSE TOKEN SHOULD BE AS STRING
//      let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
//         'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
//           'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1'
//           , '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];//Math.random() this will return anything betweeen 0-1 in decimal and after we multiply it then we got a big decimal no. then math.floor make it integer

//     }
//     return token;
// }
// app.post("/signup", function(req,res){
//     const username=req.body.username;
//     const password=req.body.password;
//     if(password.length<5){
//         res.json({
//             message:"Your password is very small Make is complex"
//         })
//         return;
//     }
//     users.push({
//         username:username,
//         password:password
//     })

//     res.send("You are signed Up successfully")
//     console.log(users);
// })
// app.post("/signin", function(req,res){
//     const username=req.body.username;
//     const password=req.body.password;
    
//     const founduser=users.find(function(u){
//         if(u.username == username && u.password==password){
//             return true;
//         }
//         else{
//             return false;
//         }
//     })

//     if(founduser){
//         const token=GenerateToken();
//         founduser.token=token;
//         res.json({
//             token:token
//         })
//     }
//     else{
//         res.status(403).send({
//             message:"Invalid username or password"
//         })
//     }
//     console.log(users);
// })

// app.get("/me",function(req,res){
//     const token=req.headers.token; //We know headers are use to authentication
//     //You can put it on body but the work of body that end point need to run
//     //but headers data are metadata SO WE SEND TOKEN IN HEADER
//     // users.find(users.token)
//     let founduser=null;
//     //If we already signin then add that user in founduser and then extractt the name and password
//     for(let i=0;i<users.length;i++){
//         if(users[i].token==token){
//             founduser=users[i];
//         }
//     }

//     if(founduser){
//         res.json({
//             username:founduser.username,
//             password:founduser.password
//         })
//     }
//     else{
//         res.json({
//             message:"Token invalid"
//         })
//     }
// })
//app.listen(3000); //this ensure that the http server is runnning on port 3000



//-----------------------LETS REPLACÈ THE ABOVE CODE WITH JWTs----------------------------



//AFTER FOLLOW ALONG WITH HARKU DONT FORGOT TO CODE THIS OF YOUR OWN ONCE WITH THINKING OF LOGIC WITHOUT SEEING FREQUENTLY
const express=require("express");
//HERE YOUR EXPRESS LIBRARY RETURN AN FUNCTION UPON RUNNING REQUIRE("EXPRESS") AND WE CALL THIS FUNCTION TO CREATE AN INSTANCE OF THIS
const JWT_SECRET="loveshubhrata";
const jwt=require("jsonwebtoken");
const app=express();
app.use(express.json()); //THIS IS A MIDDLEWARE ---------request body means user name and password if you dont use this

const users=[];
//[
//    {username:"Tanu",password:"123"}
//
//]

                    // function GenerateToken(){
                    //     //Randomly generate string
                    //     // return Math.random();//THIS MATH.RANDOM FUNCTION GIVES YOU A RANDOM NUMBER BETWEEEN 0-1 VERY LONG BUT WE DONT USE IT HERE CAUSE TOKEN SHOULD BE AS STRING
                    //      let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
                    //         'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                    //          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                    //           'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1'
                    //           , '2', '3', '4', '5', '6', '7', '8', '9'];

                    //     let token = "";
                    //     for (let i = 0; i < 32; i++) {
                    //         // use a simple function here
                    //         token += options[Math.floor(Math.random() * options.length)];//Math.random() this will return anything betweeen 0-1 in decimal and after we multiply it then we got a big decimal no. then math.floor make it integer

                    //     }
                    //     return token;
                    // }
app.post("/signup", function(req,res){
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
    console.log(users);
})
app.post("/signin", function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    
    const founduser=users.find(function(u){
        if(u.username == username && u.password==password){
            return true;
        }
        else{
            return false;
        }
    })

    if(founduser){
        const token=jwt.sign({
            username:username
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
    console.log(users);
})

app.get("/me",function(req,res){
    const token=req.headers.token; //Now they send a jwt //We know headers are use to authentication
    //You can put it on body but the work of body that end point need to run
    //but headers data are metadata SO WE SEND TOKEN IN HEADER
    // users.find(users.token)

    const decodedInformation=jwt.verify(token,JWT_SECRET);//THIS VERIFY THAT THE JWT TOKEN RECIVED IS CREATED BY ORIGINGAL USER OR NOT 
    const username=decodedInformation.username;//cause when we conver the data to jwt we convert the object so decoding we get object

    let founduser=null;
    //If we already signin then add that user in founduser and then extractt the name and password
    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            founduser=users[i];//return username and password 
        }
    }

    if(founduser){
        res.json({
            username:founduser.username,
            password:founduser.password
        })
    }
    else{
        res.json({
            message:"Token invalid"
        })
    }
})



app.listen(3000); //this ensure that the http server is runnning on port 3000
const express=require("express");

const app=express();

function loggerMiddleware(req,res,next){
    console.log("Method is " + req.method);  //req.method is use to find the method u are in inside the middeware
    console.log("The url is "+req.url); //route where the request came
    console.log("Host is"+req.hostname);
    console.log(new Date());

    next();
}    

app.use(loggerMiddleware);
app.get("/sum",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        ans: a+b
    })
});

app.get("/subtract",function(req,res){
    const a=req.query.a;
    const b=req.query.b;

    res.json({
        ans: a-b
    })
});
 
app.get("/multiply",function(req,res){
    const a=req.query.a;
    const b=req.query.b;

    res.json({
        ans:a*b
    })
});

app.get("/division",function(req,res){
    const a=req.query.a;
    const b=req.query.b;

    res.json({
        ans:a/b
    })
});

app.listen(3000);


const express=require("express");

function sum(a,b){
    return a+b;
}

const app=express();
app.get("/",function(req,res){
    const a=Number(req.query.a);
    const b=Number(req.query.b);//WIHTOUT THE Number THE A AND B RECIVE AS STRING AND WE MIGHT GET WRONG OUTPUT SO WE NEED TO USE NUMBER TO RECIVE INTEGER
    const totalsum=sum(a,b);
    res.send("Hi there your answer is "+totalsum);
})

app.listen(3001);
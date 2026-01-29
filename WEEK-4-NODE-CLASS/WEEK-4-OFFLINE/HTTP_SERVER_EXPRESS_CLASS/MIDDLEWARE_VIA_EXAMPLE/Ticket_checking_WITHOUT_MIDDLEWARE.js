                                   // WITHOUT USING MIDDLE WARE

const express=require("express");

const app=express();

//FUNCTION THAT ACT AS A MIDDLEWARE AND CHECK THE ELIGIBILITY OF THE PERSON WHO WANT TO RIDE
function IsOldEnough(age){
    if(age>=14){
        return true;
    }
    else{
        return false;
    }
}

app.get("/ride1", function(req,res){
    if(IsOldEnough(req.query.age)){
        res.json({
            msg:"You have successfully ridden the ride 1 ",
        });
    }
    else{
        res.status(411).json({
            msg:"Sorry you are not eligible to rode this ride"
        });
    }

});

app.get("/ride2",function(req,res){
    if(IsOldEnough(req.query.age)){
        res.json({
            msg:"Congrats you have successfully ridden the ride 2",
        });
    }
    else{
        res.status(411).json({
            msg:"Sorry you are not eligible to rode this ride"
        });
    }
});

app.listen(3001);

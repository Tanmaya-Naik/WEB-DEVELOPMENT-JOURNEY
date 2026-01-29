const express=require("express");

const app=express();

//FUNCTION THAT ACT AS A MIDDLEWARE AND CHECK THE ELIGIBILITY OF THE PERSON WHO WANT TO RIDE

//WE DONT NEED TO PASS THE NEXT (next) IN THE LAST ROUTE OR ITS ABOVE BUT WE NEED TO PASS IN THE MIDDLE WARE BECAUSE
//  IT IS PRESENT IN THE MIDDLE AND IT NEED TO ACCESS THE ROUTE SO ITS NEED 

function IsOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.json({
            msg:"Sorry you are not eligible to rode this ride"
        })
    }
}
app.use(IsOldEnoughMiddleware);
// AND ONE THING WE USE THIS APP.USE ONLY WHEN WE KNOW THAT ALL THE ROUTE USE ONE FUNCTION CALL AND CALLING THAT MIDDLEWARE THEN INSTEAD OF CALLING IT ON ALL
// THE ROUTE WE JUST USE THE app.use in the above of all the route
//SO ONE THING YOU SHOULD KNOW ABOUT THE app.use IS THAT IT CAN TRIGGER THE ROUTE(MIDDLEWARE) THAT ARE PRESET BELOW IT 
//SO BASICALLLY IN APP.USE ORDER MATTER MOST

app.get("/ride1", function(req,res){
     res.json({
            msg:"You have successfully ridden the ride 1 ",
        });
});

app.get("/ride2",function(req,res){
     res.json({
            msg:"You have successfully ridden the ride 2 ",
        });
});

app.listen(3001);

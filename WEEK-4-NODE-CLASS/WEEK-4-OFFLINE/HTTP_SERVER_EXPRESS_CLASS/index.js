//WHAT WE ARE DOING => SO BASICALLY WE ARE CREATING A HTTP SERVER USING EXPRESS
//IS EXPRESS IS NODE LIBRARY SO NO ITS NOT COME WITH NODE BUT FS COME SO FS 
//TO USE IT WE NEED TO INSTLL EXPRESS TO USE IT

const express=require("express");



function sumofN(n){
    let ans=0;
    for(let i=0;i<=n;i++){
        ans+=i;
    }
    return ans;
}

const app = express();//CREATING A HOSPITAL 

app.get("/",function(req,res){
    const n=req.query.n;
    const sum=sumofN(n);

    res.send("Hi there your answer is "+sum);
})


app.listen(3000);//SO THIS MEANS DOCTOR ROOM TECHNICALLY WHERE THE HTTP SERVER IS PRESENT SO IT IS IN PORT 3000

//WHENEVER YOU ARE SENDING AN OUTPUT ALWAYS SEND STRING IF YOU SEND INT ITS MIGHT CREATE PROBLEM

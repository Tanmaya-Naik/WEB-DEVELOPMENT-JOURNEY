const express=require("express");


//THIS USERS IS AN ARRAY OF USER 
const users=[{
    Name:"Naruto",
    kidneys:[{
        healthy:false
    }]
}];

const app=express();
//FOR GET REQUEST THE QUERY PARAMETER IS USE
app.get("/",function(req,res){
    //WRITE THE LOGIC TO TELL USER HOW MANY USER HE HAS AND ITS KIDNEY IS HEALTHY OR NOT
    const NarutoKidneys=users[0].kidneys;
    const numberOfKidneys=NarutoKidneys.length;
    // const numberOfHealthyKidneys
    let nummberofHealthyKidneys=0;
    for(let i=0;i<NarutoKidneys.length;i++){
        if(NarutoKidneys[i].healthy){
            nummberofHealthyKidneys += 1;
        }
    }
    const numberOfUNHealthyKidneys= numberOfKidneys-nummberofHealthyKidneys;
    res.json({
        numberOfKidneys,
        nummberofHealthyKidneys,
        numberOfUNHealthyKidneys
    })
  

})

app.use(express.json());
//FOR POST REQUEST THE U SPECIFY BODY
app.post("/",function(req,res){

    const isHealthy =req.body.isHealthy;//WHATEVER JSON DATA COME FROM POSTMAN THAT PARSE BY EXPRESS.JSON AND PUT IN THE req.body
    users[0].kidneys.push({
        healthy:isHealthy
    })

    res.json({
        msg:"Done"
    })

})
//REPLACE AND MAKE KIDNEY HEALTHY
app.put("/",function(req,res){
    
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})

})

app.delete("/",function(req,res){
    //only if atleast one unhealthy kidney is there then only do this below code,else return error 411
    // DO THE SAME FOR THE PUT BRO



    //----------------------ASSIGNMENT---------DO FOR PUT---------//
    if(AtleastOneUnhealthyKidney()){
         const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
        newKidneys.push({
            healthy:true
        })
    }
  }
    users[0].kidneys=newKidneys;
    res.json({msg:"done"})

    }
    else {
        res.status(411).json({
            msg:"You have no bad kidney so no need to remove any"
        });
    }

})

function AtleastOneUnhealthyKidney(){
    let OneUnhealthykiney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            OneUnhealthykiney=true;
        }
    }

    return OneUnhealthykiney;

}

app.listen(3010);

//put,post,get,delete are route
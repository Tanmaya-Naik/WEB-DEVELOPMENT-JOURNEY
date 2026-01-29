const express=require("express");


const users=[{
    Name:"Itachi",
    kidneys:[{
        healthy:false
    }]
}];


const app=express();

//PATIENT WANT TO CHECK THEIR KIDNEY HEALTH AND HOW MANY KIDNEY TOTAL THEY HAVE
app.get("/",function(req,res){
    const Itachikidney=users[0].kidneys;
    const totalkidneysofitachi=Itachikidney.length;
    let totalHealthykidney=0;
    for(let i=0;i<totalkidneysofitachi;i++){
        if(users[0].kidneys[i].healthy){
            totalHealthykidney+=1;
        }
    }
    const totalUnhealthykidney=totalkidneysofitachi-totalHealthykidney;

    res.json({
        totalkidneysofitachi,
        totalHealthykidney,
        totalUnhealthykidney
    })
})

app.use(express.json()); // ✅ This parses JSON body of incoming requests

//ADD NEW KIDNEY TO THE PATIENT
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })

    res.json({
        msg:"done!"
    })

})

app.put("/",function(req,res){
    if(AtleastOneunhealthykidney()){
            for(let i=0;i<users[0].kidneys.length;i++)
        {
            users[0].kidneys[i].healthy=true;
        }

         res.json({})
    }
    else {
        res.status(411).json({
            msg:"You have no bad kidney so no need to make it healthy"
        });
    }
    
})

app.delete("/",function(req,res){
    if(AtleastOneunhealthykidney()){
        const newKidney=[];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidney.push({
                     healthy:true
                })
            }
        }
        users[0].kidneys=newKidney;
        res.json({msg:"done!"})
    }
    else {
        res.status(411).json({
            msg:"You have no bad kidney so no need to remove any"
        });
    }
})

function AtleastOneunhealthykidney(){
    let oneUnhealthykidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            oneUnhealthykidney=true;
        }
    }
    return oneUnhealthykidney;
}

app.listen(3000);


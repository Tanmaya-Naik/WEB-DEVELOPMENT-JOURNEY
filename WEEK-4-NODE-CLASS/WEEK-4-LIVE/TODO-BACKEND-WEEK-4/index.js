
const express=require("express");
const app=express();

//route handlers
app.get('/',function(req,res){
    res.send('Hello world!')
})


app.get('/asd',function(req,res){
    res.send('Hello world from asd!')
})

app.listen(4000);


//CREATE A TODO APPILCATION OF YOUR OWN 
//WHERE YOU CAN DO ALL CRUD OPERATION AND STORE DATA IN MEMORY
//
/* let todos=[];
 extract the todo title from the body 
 todos.push({
 title,
 id
 })


 //extract todo id and remove from here



 3RD ASSGINMENT -----------------ADD USER LOGIC
 let users={
 1: {
 todos:}}
 */
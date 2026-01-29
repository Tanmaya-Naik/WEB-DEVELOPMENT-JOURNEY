/*
Assignment #2 - Trying to code a filesystem based todo app and store data into the file
*/

//Import the express module by using the require function and store in express variable



const express=require("express");

const fs=require("fs");

const path=require("path");
const { title } = require("process");


const app=express();


app.use(express.json());

const todosfilepath=path.join(__dirname,"/todo-data.json");

// Function to read todos-data from the file and return it as an array of todos objects

const readtodosFromfile=() =>{
    try {
        const data=fs.readFileSync(todosfilepath,"utf-8");
        return JSON.parse(data);
    }
    catch(error) {
        return [];

    }
};
// Function to write todos-data to the file

const writeTodosdata=(data) =>{
    fs.writeFileSync(todosfilepath,JSON.stringify(data,null,2),"utf-8");

};

/**
 * create a route handler for POST request
 *
 * Create a new todo object and add it to the todos array
 *
 * URL: localhost:3000/todos/create
 * Example: localhost:3000/todos/create
 */

app.post("/todos/create",function(req,res){
    const {todo}=req.body;
    const id=parseInt(req.body.id);

    if(!id){
        return res.send("Id can not be empty");
    }

    let todos=readtodosFromfile();

    //check if the todo is already present with the given id
    for(let i=0;i<todos.length;i++){
        if(todos[i].id===id){
            return res.send("Todo with this id is already present");
        }

    }

    //check if the todo is empty 
    if(!todo || todo.trim()===""){
        return res.send("Todo cant be empty");
    }

    const newTodo={
        title: todo,
        id: id,
    };

    todos.push(newTodo);

    writeTodosdata(todos); 
    
    // send a response with message "Todo added successfully"
    res.send("Todo added successfully");

});

/**
 * create a route handler for DELETE request
 *
 * Delete all the todos from the array
 *
 * URL: localhost:3000/todos/delete/all
 * Example: localhost:3000/todos/delete/all
 */

app.delete("/todos/delete/all",function(req,res){
   // write an empty array to the file
    writeTodosdata([]);

    
    // send a response with message "All todos deleted successfully"
    res.send("All todos deleted successfully");
});


/**
 * create a route handler for DELETE request
 *
 * Delete the todos with the given id from the array
 *
 * URL: localhost:3000/todo/delete/:id
 * Example: localhost:3000/todo/delete/1
 */

app.delete("/todo/delete/:id",function(req,res){
    //get the id of the todo you want to delete
    const todoId=parseInt(req.params.id);

    let todos = readtodosFromfile();

    let deleted=false;

    let temptodo=[];
    for(let i=0;i<todos.length;i++){
        if(todos[i].id===todoId){
            deleted=true;
            continue;
        }
        temptodo.push(todos[i]);
    }
    todos=temptodo;
    
    // if todo is not found with the given id, send a response with message "Todo not found with id" and the todo id
    if (!deleted) {
        return res.send("Todo not found with id " + todoId);
    }

    writeTodosdata(todos);

     // send a response with message "Todo deleted successfully with id" and the todo id
    res.send("Todo deleted successfully with id " + todoId);

});

/**
 * create a route handler for PUT (Update) request
 *
 * Update the todos with the given id in the array
 *
 * URL: localhost:3000
 * Example: localhost:3000/todo/update/1
 */

app.put("/todo/update/:id",function(req,res){
    //first get the todo from the request body
    const {todo}=req.body;

    const todoId=parseInt(req.params.id);

    //check if the todo is empty of whot
    if(!todo || todo.trim()===""){
        return res.send("Todo cant be empty");
    }
    let todos=readtodosFromfile();
    let updated=false;

    for(let i=0;i<todos.length;i++){
        if(todos[i].id===todoId){
            todos[i].title=todo;
            updated=true;
        }
    }

    // if todo is not found with the given id, send a response with message "Todo not found with id" and the todo id
    if (!updated) {
        return res.send("Todo not found with id " + todoId);
    }

    writeTodosdata(todos);

    res.send("Todo is updated successfully");

});


/**
 * create a route handler for GET (Read) request
 *
 * Read all the todos from the array
 *
 * URL: localhost:3000
 * Example: localhost:3000/todo/read/all
 */

app.get("/todo/read/all",function(req,res){
    let todos=readtodosFromfile();
    if(todos.length===0){
        return res.send("Todo is empty!!!!!!");
    }

    res.send(todos);
});

/**
 * create a route handler for GET (Read) request
 *
 * Read the todos with the given id from the array
 *
 * URL: localhost:3000
 * Example: localhost:3000/todos/read/1
 */
 app.get("/todos/read/:id",function(req,res){
    let todoId=parseInt(req.params.id);

    let todos=readtodosFromfile();

     // find the todo with the given id from the todos array
    const todo = todos.find((todo) => todo.id === todoId);

    // if todo is not found, send a response with message "Todo not found with id" and the todo id
    if (!todo) {
        return res.send("Todo not found with id " + todoId);
    }

    // send the todo as response
    res.send(todo);

 });

 app.listen(3000,() =>{
         console.log("Server is running on port 3000");
 })



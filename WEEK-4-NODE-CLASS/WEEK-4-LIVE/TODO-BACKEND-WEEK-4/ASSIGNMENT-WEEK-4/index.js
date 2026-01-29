/*
Assignment #1 - Trying to code a todo app and store data into the array
*/

//import the express module by using require function and store it on the express variable
const express=require("express");

//create a express application using express function
const app=express();

//middleware to parse the JSON DATA to the request body
app.use(express.json());

//first create a empty array to store the TODOS IN IT
let todos=[];

/**
 * create a route handler for POST request
 *
 * Create a new todo object and add it to the todos array
 *
 * URL: localhost:3000/todos/create
 * Example: localhost:3000/todos/create
 */

app.post("/todos/create",function(req,res){
    //get the todo from the req.body
    const {todo}=req.body;

    //get the id from the request body and make it int
    const id=parseInt(req.body.id);

    //check id is not empty and if empty send back message id can't be empty
    if(!id){
        res.send("Id can not be empty");
    }

    //check if the todo is already exist with the id
    for(let i=0;i<todos.length;i++){
        if(todos[i].id===id){
            return res.send("This todo is already present with this id");
        }
    }

    //check if the req.body todo is empty
    if(!todo || todo.trim() === ""){
        return res.send("todo can't be empty!"+id);
    }

    const newTodo={
        title: todo,
        id: id,
    };

    // add the new todo to the todos array which we created globally
    todos.push(newTodo);

// send a response with message "Todo added successfully"
    res.send("NEW TODO ADDED SUCCESSFULLY!")

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
    todos=[];
    res.send("ALL TODO DELETED SUCCESSFULLY")
});

/**
 * create a route handler for DELETE request
 *
 * Delete the todos with the given id from the array
 *
 * URL: localhost:3000
 * Example: localhost:3000/todo/delete/1
 */

app.delete("/todo/delete/:id",function(req,res){
    const todoId=parseInt(req.params.id);

    // create a deleted variable and set it to false
    let deleted = false;

    //create a temptodo array to store the remaining todo after deleting the desired todo with given id
    let temptodo=[];

    for(let i=0;i<todos.length;i++){
        if(todos[i].id===todoId){
            deleted=true;
            continue;// skip adding this todo to tempTodos
        }

        // add the todo to temptodo array
        temptodo.push(todos[i]);
    }

     // if todo is not found with the given id, send a response with message "Todo not found with id" and the todo id
     if(!deleted){
        return res.send("You enter wrong todo id as todo with given id is not found")
     }

     todos=temptodo;

     res.send("TODO WITH GIVEN ID IS DELETED SUCCESSFULLY"+todoId)
     
});

/**
 * create a route handler for PUT (Update) request
 *
 * Update the todos with the given id in the array
 *
 * URL: localhost:3000/todo/update/:id
 * Example: localhost:3000/todo/update/1
 */

app.put("/todo/update/:id",function(req,res){
// get the todo and todo id from the request body and parameters
    const {todo}=req.body;

    const todoId=parseInt(req.params.id);

    //check if the todo is not empty
    if(!todo || todo.trim()===""){
        return res.send("the given todo is empty")
    }

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

    // send a response with message "Todo updated successfully with id" and the todo id
    res.send("Todo updated successfully with id " + todoId);

});

/**
 * create a route handler for GET (Read) request
 *
 * Read all the todos from the array
 *
 * URL: localhost:3000/todo/read/all
 * Example: localhost:3000/todo/read/all
 */

app.get("/todo/read/all",function(req,res){
    if(todos.length===0){
        return res.send("There is no todo!!!")
    }

    res.send(todos)
});

/**
 * create a route handler for GET (Read) request
 *
 * Read the todos with the given id from the array
 *
 * URL: localhost:3000/todos/read/:id
 * Example: localhost:3000/todos/read/1
 */

app.get("/todos/read/:id",function(req,res){
     // get the todo id from the request parameters and convert it to integer
    const todoId = parseInt(req.params.id);

    // find the todo with the given id from the todos array
    const todo = todos.find((todo) => todo.id === todoId);

    // if todo is not found, send a response with message "Todo not found with id" and the todo id
    if (!todo) {
        return res.send("Todo not found with id " + todoId);
    }

    // send the todo as response
    res.send(todo);
});

app.listen(3000, () => {
    console.log("Server is running in the port 3000");
});


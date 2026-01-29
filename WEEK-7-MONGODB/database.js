// ⚠️ CAUTION: Don't use TypeScript type annotations (e.g., email: string) in .js files!
// In JavaScript + Mongoose, use capitalized types like String, Number, Boolean, etc.
// Example:
// ❌ Wrong (TypeScript style)  -> email: string
// ✅ Correct (JavaScript style) -> email: String


const mongoose=require("mongoose");
//this mongoose library export a class called schema
const Schema=mongoose.Schema;
const objectId=mongoose.ObjectId;


//lets define how data will look in the database by schema
const User= new Schema({
    name:String,
    password:String,
    email: {type: String, unique:true} 
});

const Todo=new Schema({
    title:String,
    done:Boolean,
    userId:objectId
});

//to call the functions in the index.js file insert function we need a model so lets create this model

const UserModel =mongoose.model('users',User);//syntax=model('name of the folder you put in the database','THE SCHEMA YOU DEFINED ABOVE MEANS WHERE DATA PUT IN users)
const TodoModel=mongoose.model('todos',Todo);

//as we write these data in this file so this need to export to the index.js file
module.exports={
    UserModel:UserModel,
    TodoModel:TodoModel
}

//we are exporting a object
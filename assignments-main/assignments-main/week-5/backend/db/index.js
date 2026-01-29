//  start writing from here
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.Schema.Types.ObjectId;

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Database connected successfully"))
.catch(err=>console.log("Error happend during mongodb connection",err));

const UserSchema=new mongoose.Schema({
    name:String,
    password:String,
    email:{type:String,unique:true}

});

const TodoSchema=new mongoose.Schema({
     title:String,
    description:String,
    done:Boolean,
    userId:ObjectId
});

const User=mongoose.model("User",UserSchema);
const Todo=mongoose.model("Todo",TodoSchema);


module.exports = {
    User,
    Todo
}
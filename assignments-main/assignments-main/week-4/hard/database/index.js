const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// Connect to MongoDB
console.log("MONGO_URL =>", process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    name:String,
    password:String,
    email:{type:String,unique:true}
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    done:Boolean,
    userId:ObjectId
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}
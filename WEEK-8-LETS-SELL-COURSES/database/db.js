const mongoose = require("mongoose");
console.log("connected to");

mongoose.connect("mongodb+srv://tanmayanaik2020:Tanu123mongodb@cluster0.3so0121.mongodb.net/course-selling-app");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String  // use lowercase consistent with your API code
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  Price: Number,
  imageurl: String,
  creatorId: ObjectId  
});

const AdminSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String  // consistent casing here too
});

const purchaseSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId
});


const userModel = mongoose.model('user', UserSchema);
const courseModel = mongoose.model('course', CourseSchema);
const AdminModel = mongoose.model('admin', AdminSchema);  // fixed typo
const purchaseModel = mongoose.model('buy', purchaseSchema);  // fixed wrong schema

module.exports = {
  userModel,
  courseModel,
  AdminModel,
  purchaseModel
};

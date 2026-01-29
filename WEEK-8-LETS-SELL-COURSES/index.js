require("dotenv").config({ path: __dirname + "/.env" }); 
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
  console.log("MONGO_URL is:", process.env.MONGO_URL);

  await mongoose.connect(process.env.MONGO_URL);
  console.log("✅ connected to MongoDB");

  app.listen(process.env.PORT, () => {
    console.log(`🚀 listening on port ${process.env.PORT}`);
  });
}
main().catch(err => console.error("❌ MongoDB connection error:", err));




const express = require("express");
// const dotenv = require("dotenv");

// Load env variables first
// dotenv.config();
require("dotenv").config({ path: __dirname + "/.env" });

// console.log("ENV FILE PATH =>", require("path").resolve(".env"));

// console.log("Loaded MONGO_URL =>", process.env.MONGO_URL);

// console.log("Loaded PORT =>", process.env.PORT);
// console.log("Loaded MONGO_URL =>", process.env.MONGO_URL);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check
app.get("/healthy", (req, res) => res.send("I am Healthy"));

// Routes
const userRoutes = require("./routes/user");
const todoRoutes = require("./routes/todo");

app.use("/api/user", userRoutes);
app.use("/api/todo", todoRoutes);

// Start server
app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));

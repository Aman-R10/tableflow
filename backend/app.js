const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./src/routes/authRoutes"));

// Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;

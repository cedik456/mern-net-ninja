require("dotenv").config();
const express = require("express");

// Express App
const app = express();

// Listen Request
app.listen(process.env.PORT, () => {
  console.log(`Port is running on http://localhost:${process.env.PORT}`);
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello from the server" });
});

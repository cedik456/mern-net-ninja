require("dotenv").config();
const express = require("express");

// express app
const app = express();

// middleware

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// listen Request
app.listen(process.env.PORT, () => {
  console.log(`Port is running on http://localhost:${process.env.PORT}`);
});

// routes
app.get("/", (req, res) => {
  res.json({ message: "Hello from the server" });
});

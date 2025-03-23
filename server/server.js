require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const workoutRoutes = require("./routes/workouts");
const cors = require("cors");

// express app
const app = express();

// middleware

app.use(express.json()); // automatically parses incoming json
app.use(methodOverride("_method"));
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ message: "Hello from the server" });
});

// connect db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Port is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// routes workout
app.use("/api/workouts", workoutRoutes);

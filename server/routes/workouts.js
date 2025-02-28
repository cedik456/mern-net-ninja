const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get all workouts" });
});

router.get("/:id", (req, res) => {
  //   res.json({ message: "Get a single workout" });
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

router.post("/", (req, res) => {
  res.json({ message: "Create a workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "Edit a workout" });
});

module.exports = router;

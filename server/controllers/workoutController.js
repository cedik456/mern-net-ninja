const Workout = require("../models/WorkoutModel");
const mongoose = require("mongoose");

// Get a single Workout

const getWorkout = async (req, res) => {
  const { id } = req.params;

  // mongoose error handler
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(202).json(workout);
};

// Get all Workouts

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find().sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// Add Workouts

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
};

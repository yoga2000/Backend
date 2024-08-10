const Workout = require("../model/workoutModel");

const mongoose = require("mongoose");

/// get all

const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// get all by id

const getById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "no such found" });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ err: "no such found" });
  }

  return res.status(200).json(workout);
};

// post

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = Workout.create({ title, reps, load });

    return res.status(201).json(workout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// delete

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "no such found" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ err: "no such found" });
  }

  return res.status(200).json(workout);
};

//put

const updateWorkOut = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "no such found" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(404).json({ err: "no such found" });
  }

  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getById,
  getAllWorkouts,
  deleteWorkout,
  updateWorkOut,
};

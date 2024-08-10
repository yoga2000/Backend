const express = require("express");

const router = express.Router();

const {
  getAllWorkouts,
  getById,
  createWorkout,
  deleteWorkout,
  updateWorkOut,
} = require("../controller/workoutController");

// Get all workout

router.get("/", getAllWorkouts);

// get by id

router.get("/:id", getById);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.put("/:id", updateWorkOut);

module.exports = router;

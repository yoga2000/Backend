const express = require("express");
const mongoose = require("mongoose");

const app = express();

const workoutRoutes = require("./routes/routes.js");

const MONGO_URI =
  "mongodb+srv://root:root@yogaraj.m4uknnq.mongodb.net/?retryWrites=true&w=majority&appName=yogaraj";

// middleware

app.use(express.json());

// connect  to db

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      "app is listening on port 4000";
    });
  })
  .catch((error) => console.log(error));

app.use("/api/workouts", workoutRoutes);

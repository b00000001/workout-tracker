const router = require("express").Router();
const Workout = require("../models/workout");
router.get("/workouts", (req, res) => {
  res.send("Success");
});

module.exports = router;

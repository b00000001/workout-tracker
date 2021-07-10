const router = require("express").Router();
const Workout = require("../models/workout");
router.get("/workouts", async (req, res) => {
  try{
    const dbWorkoutData = await Workout.find();
    return res.json(dbWorkoutData);
  }
  catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require("express").Router();
const Workout = require("../models/workout");
router.get("/api/workouts", async (req, res) => {
  try {
    const dbWorkoutData = await Workout.find();
    return res.json(dbWorkoutData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/api/workouts", async (req, res) => {
  try {
    const dbWorkoutData = await Workout.create({});
    return res.json(dbWorkoutData);
  } catch (err) {}
  console.log(err);
  res.status(500).json(err);
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    const dbWorkoutData = await Workout.find();
    return res.json(dbWorkoutData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/api/workouts/range", async (req, res) => {
  try {
    const dbWorkoutData = await Workout.create({});
    return res.json(dbWorkoutData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/api/workouts/:id", async (req, res) => {
  try {
    const DBWorkoutData = await Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    );
  } catch (err) {}
  const dbWorkoutData = await Workout.create({});
  return res.json(dbWorkoutData);
});

module.exports = router;

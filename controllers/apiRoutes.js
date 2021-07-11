const router = require("express").Router();
const Workout = require("../models/workout");
router.get("/workouts", async (req, res) => {
  try {
    const dbWorkoutData = await Workout.find();
    return res.json(dbWorkoutData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/workouts", async (req, res) => {
  console.log("/workouts");
  try {
    const dbWorkoutData = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
        }
      }
    ]);
    return res.json(dbWorkoutData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/workouts/range", async (req, res) => {
  try {
    const dbWorkoutData = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
        }
      }
    ])
      .sort({ _id: -1 })
      .limit(7);
    return res.json(dbWorkoutData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/workouts/range", async (req, res) => {
  try {
    const dbWorkoutData = await Workout.create({});
    return res.json(dbWorkoutData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/workouts/:id", async ({ body, params }, res) => {
  console.log(body, params);
  try {
    const dbWorkoutData = await Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    );
    res.json(dbWorkoutData);
  } catch (err) {
    const dbWorkoutData = await Workout.create({});
    return res.json(dbWorkoutData);
  }
});

module.exports = router;

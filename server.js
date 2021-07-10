const express = require("express");
const routes = require("./controllers");
const mongojs = require("mongojs"); // Importing MongoJS
const logger = require("morgan"); // importing Logger
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { useNewUrlParser: true });


const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(routes);

// app.get("/exercise", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/exercise.html"));
// });

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

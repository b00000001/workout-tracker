const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Success");
});

module.exports = router;

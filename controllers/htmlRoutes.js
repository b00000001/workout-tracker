const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/test.html"));
});

module.exports = router;

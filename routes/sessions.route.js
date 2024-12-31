const router = require("express").Router();
const { getAllSessions } = require("../controllers/sessions.controller");

router.get("/", (req, res) => {
  res.send("Sessions route");
});

module.exports = router;

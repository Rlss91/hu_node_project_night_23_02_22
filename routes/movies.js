const express = require("express");
const path = require("path");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "..", "public", "movies.html"));
});

module.exports = router;

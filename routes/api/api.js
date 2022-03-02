const express = require("express");
const authMw = require("../../middleware/auth.mw");
const authRouter = require("./auth");
const moviesRouter = require("./movies.route");
const router = express.Router();
//http://localhost:3000/api/

//http://localhost:3000/api/auth/
router.use("/auth", authRouter);

//http://localhost:3000/api/movies
router.use("/movies", authMw, moviesRouter);

module.exports = router;

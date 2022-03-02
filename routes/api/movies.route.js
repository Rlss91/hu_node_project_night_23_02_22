const express = require("express");
const moviesValidation = require("../../validation/movies.validation");
const moviesModel = require("../../model/movies.model");
const router = express.Router();

//http://localhost:3000/api/movies/
router.post("/", async (req, res) => {
  try {
    const validatedValue =
      await moviesValidation.movieValidationSchema.validateAsync(req.body);
    const movieData = await moviesModel.selectMovieByTitle(
      validatedValue.title
    );
    console.log("movieData", movieData);
    if (movieData.length === 0) {
      const newMovies = await moviesModel.insertMovie(
        validatedValue.title,
        validatedValue.year,
        validatedValue.img
      );
      res.json({ msg: "new movie inserted" });
    } else {
      throw "movie already exists";
    }
  } catch (err) {
    res.status(401).json({ err });
  }
});

module.exports = router;

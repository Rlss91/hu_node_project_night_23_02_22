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

//http://localhost:3000/api/movies/
router.patch("/", async (req, res) => {
  try {
    const validatedId =
      await moviesValidation.movieObjIdValidationSchema.validateAsync({
        id: req.body.id,
      });
    let newObj = { ...req.body };
    delete newObj.id;
    const validatedValue =
      await moviesValidation.movieUpdateValidationSchema.validateAsync(newObj);
    console.log("validatedValue", validatedValue);
    const movieData = await moviesModel.updateMovieById(
      req.body.id,
      validatedValue.title,
      validatedValue.year,
      validatedValue.img
    );
    console.log("movieData", movieData);
    res.json({ msg: "ok" });
  } catch (err) {
    console.log("err", err);
    res.status(401).json({ err });
  }
});

//http://localhost:3000/api/movies/
router.delete("/", async (req, res) => {
  try {
    const validatedId =
      await moviesValidation.movieObjIdValidationSchema.validateAsync(req.body);
    const movieData = await moviesModel.deleteMovieById(validatedId.id);
    console.log("movieData", movieData);
    if (movieData.deletedCount) res.json({ msg: "ok" });
    else res.json({ msg: "not found" });
  } catch (err) {
    console.log("err", err);
    res.status(401).json({ err });
  }
});

router.get("/", async (req, res) => {
  try {
    const moviesData = await moviesModel.selectAllMovies();
    res.json({ moviesData });
  } catch (err) {
    res.status(401).json({ err });
  }
});

module.exports = router;

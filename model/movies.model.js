const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  img: { type: String, required: true },
});

const Movies = mongoose.model("Movies", moviesSchema);

const selectMovieByTitle = (title) => {
  return Movies.find({ title });
};

const selectAllMovies = () => {
  return Movies.find();
};

const insertMovie = (title, year, img) => {
  const movieData = new Movies({
    title,
    year,
    img,
  });
  return movieData.save();
};

const updateMovieById = (id, title, year, img) => {
  let objToUpdate = {};
  if (title) {
    objToUpdate = { ...objToUpdate, title };
  }
  if (year) {
    objToUpdate = { ...objToUpdate, year };
  }
  if (img) {
    objToUpdate = { ...objToUpdate, img };
  }
  if (!objToUpdate) {
    return Promise.reject("please provide at list one field");
  }
  return Movies.updateOne({ _id: id }, objToUpdate);
};

module.exports = {
  selectMovieByTitle,
  selectAllMovies,
  insertMovie,
  updateMovieById,
};

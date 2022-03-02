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

const insertMovie = (title, year, img) => {
  const movieData = new Movies({
    title,
    year,
    img,
  });
  return movieData.save();
};

module.exports = {
  selectMovieByTitle,
  insertMovie,
};

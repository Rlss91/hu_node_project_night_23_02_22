const Joi = require("joi");

const movieValidationRules = {
  title: Joi.string().min(2).max(30).required(),
  year: Joi.string().min(4).max(4).required(),
  img: Joi.string().min(11).required(),
};

const movieValidationSchema = Joi.object(movieValidationRules);

module.exports = {
  movieValidationSchema,
};

const Joi = require("joi");

const movieValidationRules = {
  title: Joi.string().min(2).max(30).required(),
  year: Joi.string().min(4).max(4).required(),
  img: Joi.string().min(11).required(),
};

const movieUpdateValidationRules = {
  title: Joi.string().min(2).max(30),
  year: Joi.string().min(4).max(4),
  img: Joi.string().min(11),
};

const movieObjIdValidationRules = {
  id: Joi.string().hex().length(24).required(),
};

const movieValidationSchema = Joi.object(movieValidationRules);

const movieUpdateValidationSchema = Joi.object(movieUpdateValidationRules).min(
  1
);
const movieObjIdValidationSchema = Joi.object(movieObjIdValidationRules);

module.exports = {
  movieValidationSchema,
  movieUpdateValidationSchema,
  movieObjIdValidationSchema,
};

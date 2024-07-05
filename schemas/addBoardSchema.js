const Joi = require("joi");

const addBoardSchema = Joi.object({
  title: Joi.string().required(),
  toDo: Joi.array().required(),
  inProgress: Joi.array().required(),
  done: Joi.array().required(),
});
module.exports = {
  addBoardSchema,
};

const Joi = require("joi");

const addBoardSchema = Joi.object({
  title: Joi.string().required(),
  toDo: Joi.array().required(),
  inProgress: Joi.array().required(),
  done: Joi.array().required(),
});
const upDateSchema = Joi.object({
  toDo: Joi.array(),
  inProgress: Joi.array(),
  done: Joi.array(),
});

module.exports = {
  addBoardSchema,
  upDateSchema,
};

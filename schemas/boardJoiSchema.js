const Joi = require("joi");

const addBoardSchema = Joi.object({
  title: Joi.string().required(),
  toDo: Joi.array().required(),
  inProgress: Joi.array().required(),
  done: Joi.array().required(),
});
const upDateToDoSchema = Joi.object({
  toDo: Joi.array().required(),
});
const upDateInProgressSchema = Joi.object({
  inProgress: Joi.array().required(),
});
const upDateInDoneSchema = Joi.object({
  done: Joi.array().required(),
});
module.exports = {
  addBoardSchema,
  upDateToDoSchema,
  upDateInProgressSchema,
  upDateInDoneSchema,
};

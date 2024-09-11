const ctrlWrapper = require("../helpers/ctrlWrapper");
const HttpError = require("../helpers/HttpError");
const Board = require("../models/boardDataBaseModel");

const getAll = async (req, res) => {
  const result = await Board.find();
  res.json(result);
};
const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Board.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await Board.create(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;

  const result = await Board.findByIdAndUpdate(id, req.body, { new: true });
  // new: true - повертає нову версію об'єкта після оновлення
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(201).json(result);
};
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const result = await Board.findByIdAndUpdate(id, req.body, { new: true });
  // new: true - повертає нову версію об'єкта після оновлення
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Updated successfull",
  });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Board.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Delete success",
  });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateTodo: ctrlWrapper(updateTodo),
  deleteById: ctrlWrapper(deleteById),
};

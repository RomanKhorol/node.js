const ctrlWrapper = require("../controllers/ctrlWrapper");
const HttpError = require("../helpers/HttpError");
const boards = require("../models/index");
const getAll = async (req, res) => {
  const result = await boards.getAll();
  res.json(result);
};
const getById = async (req, res) => {
  const { id } = req.params;
  const result = await boards.getById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await boards.add(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;

  const result = await boards.updateById(id, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await boards.deleteById(id);
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
  deleteById: ctrlWrapper(deleteById),
};

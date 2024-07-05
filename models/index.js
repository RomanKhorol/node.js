const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const boardsPath = path.join(__dirname, "boards.json");
const getAll = async () => {
  const data = await fs.readFile(boardsPath);
  return JSON.parse(data);
};
const getById = async (id) => {
  const boards = await getAll();
  const result = boards.find((item) => item.id === id);
  return result || null;
};
const add = async (data) => {
  const boards = await getAll();
  const newBoard = {
    id: nanoid(),
    ...data,
  };
  boards.push(newBoard);
  await fs.writeFile(boardsPath, JSON.stringify(boards, null, 2));
  return newBoard;
};
const updateById = async (id, data) => {
  const boards = await getAll();
  const index = boards.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  boards[index] = { id, ...data };
  await fs.writeFile(boardsPath, JSON.stringify(boards, null, 2));
  return boards[index];
};

const deleteById = async (id) => {
  const boards = await getAll();
  const index = boards.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = boards.splice(index, 1);
  await fs.writeFile(boardsPath, JSON.stringify(boards, null, 2));
  return result;
};
module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
};

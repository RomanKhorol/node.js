const {
  getAll,
  getById,
  add,
  updateById,
  updateTodo,
  deleteById,
} = require("../../controllers/boards");
const Board = require("../../models/boardDataBaseModel");
jest.mock("../../models/boardDataBaseModel");
describe("Boards", () => {
  describe("getAll", () => {
    it("should return a list of Boards in JSON format", async () => {
      const mockBoards = [
        { id: 1, title: "Board 1" },
        { id: 2, title: "Board 2" },
      ];

      Board.find.mockResolvedValue(mockBoards);

      const req = {};
      const res = { json: jest.fn() };
      const next = jest.fn();

      await getAll(req, res, next);

      expect(Board.find).toHaveBeenCalledTimes(1);

      expect(res.json).toHaveBeenCalledWith(mockBoards);
      expect(next).not.toHaveBeenCalled();
    });
  });
  describe("get Board by id", () => {
    it("should returns Board with id", async () => {
      const mockBoard = {
        id: 777,
      };
      Board.findById.mockResolvedValue(mockBoard);
      const req = {
        params: {
          id: 777,
        },
      };
      const res = { json: jest.fn() };
      const next = jest.fn();
      await getById(req, res, next);
      expect(Board.findById).toHaveBeenCalledTimes(1);

      expect(next).not.toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ id: 777 });
    });
    it("should call Next when no id", async () => {
      let req;
      let res;
      const next = jest.fn();
      await getById(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
  describe("add Board", () => {
    it("'should add a new Board and return it with status 201'", async () => {
      const mockReqBody = {
        title: "Test1",
        toDo: [
          {
            title: "Add header",
            description: "Need good header",
            _id: "66898565cda53a4279b9485d",
          },
        ],
        inProgress: [
          {
            title: "Add header",
            description: "Need good header",
            _id: "66898565cda53a4279b9485d",
          },
        ],
        done: [
          {
            title: "Add sidebar",
            description: "Need good sidebar",
            _id: "66898565cda53a4279b9485e",
          },
        ],
      };
      const mockCreatedtedBoard = { _id: 123, ...mockReqBody };
      Board.create.mockResolvedValue(mockCreatedtedBoard);
      const req = { body: mockReqBody };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      const next = jest.fn();
      await add(req, res, next);
      expect(Board.create).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith(mockCreatedtedBoard);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(next).not.toHaveBeenCalled();
    });
  });
  describe("update Boadr by id ", () => {
    it("should find Board by id and update fully all fields", async () => {
      const mockReqBody = {
        _id: 123,
      };
      const updatedBoard = {
        _id: 123,
        title: "Test1234567",
        toDo: [
          {
            title: "Add header",
            description: "Need good header",
            _id: "66898565cda53a4279b9485d",
          },
        ],
        inProgress: [
          {
            title: "Add header",
            description: "Need good header",
            _id: "66898565cda53a4279b9485d",
          },
        ],
        done: [
          {
            title: "Add sidebar",
            description: "Need good sidebar",
            _id: "66898565cda53a4279b9485e",
          },
        ],
      };
      Board.findByIdAndUpdate.mockResolvedValue(updatedBoard);
      const req = { params: mockReqBody };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      const next = jest.fn();
      await updateById(req, res, next);
      expect(Board.findByIdAndUpdate).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith(updatedBoard);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(next).not.toHaveBeenCalled();
    });
    it("should call next when Board not found", async () => {
      const mockReqBody = {
        _id: 123,
      };
      const updatedBoard = undefined;
      Board.findByIdAndUpdate.mockResolvedValue(updatedBoard);
      const req = { params: mockReqBody };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      const next = jest.fn();
      await updateById(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
  describe("", () => {});
});

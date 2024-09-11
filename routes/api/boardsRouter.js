const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const isValidId = require("../../middlewares/isValidId");
const shemas = require("../../schemas/boardJoiSchema");
const router = express.Router();
const ctrl = require("../../controllers/boards");

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(shemas.addBoardSchema), ctrl.add);
router.patch(
  "/:id/toDo",
  isValidId,
  validateBody(shemas.upDateToDoSchema),
  ctrl.updateTodo
);
router.patch(
  "/:id/inProgress",
  isValidId,
  validateBody(shemas.upDateInProgressSchema),
  ctrl.updateTodo
);
router.patch(
  "/:id/done",
  isValidId,
  validateBody(shemas.upDateInDoneSchema),
  ctrl.updateTodo
);

router.put(
  "/:id",
  isValidId,
  validateBody(shemas.addBoardSchema),
  ctrl.updateById
);
router.delete("/:id", isValidId, ctrl.deleteById);
module.exports = router;

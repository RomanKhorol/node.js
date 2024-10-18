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
  "/:id",
  isValidId,
  validateBody(shemas.upDateSchema),
  ctrl.updateTodoInProgressDone
);

router.put(
  "/:id",
  isValidId,
  validateBody(shemas.upDateSchema),
  ctrl.updateById
);
router.delete("/:id", isValidId, ctrl.deleteById);
module.exports = router;

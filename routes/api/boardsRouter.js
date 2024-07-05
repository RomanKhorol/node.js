const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const shemas = require("../../schemas/addBoardSchema");
const router = express.Router();
const ctrl = require("../../controllers/boards");

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(shemas.addBoardSchema), ctrl.add);

router.put("/:id", validateBody(shemas.addBoardSchema), ctrl.updateById);
router.delete("/:id", ctrl.deleteById);
module.exports = router;

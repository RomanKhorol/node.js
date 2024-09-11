const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");
const toDoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const boadrSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    toDo: {
      type: [toDoSchema],
      required: true,
    },
    inProgress: {
      type: [toDoSchema],

      required: true,
    },
    done: {
      type: [toDoSchema],

      required: true,
    },
  },
  { versionKey: false, timestamps: true }
  //   прибираємо "__v": 0 з данних які приходять
);

boadrSchema.post("save", handleMongooseError);
//емулюємо код помилки при вводі невірних данних 400,
//так як mongoose викидає помилку без статусу, і наша мідлвара в app.js ставить код 500
//а повинен бути код при невірних данних 400

const Board = model("task_board", boadrSchema);
module.exports = Board;

const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const boardsRouter = require("./routes/api/boardsRouter");
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/boards", boardsRouter);
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;

  res.status(status).json({ message });
});

module.exports = app;

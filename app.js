const express = require("express");
const cors = require("cors");
const boardsRouter = require("./routes/api/boardsRouter");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/boards", boardsRouter);
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;

  res.status(status).json({ message });
});

module.exports = app;

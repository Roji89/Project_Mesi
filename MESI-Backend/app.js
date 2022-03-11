require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const cors = require("cors");
const userRouter = require("./routes/userRouter");
const app = express();
app.use(express.json());
app.use(cors());

const fs = require("fs");

app.use("/auth", userRouter);
// This should be the last route else any after it won't work
app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = app;

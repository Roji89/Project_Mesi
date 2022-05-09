require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const app = express();
app.use(express.json());
app.use(cors());

const fs = require("fs");
const bodyParser = require("body-parser");
const user = require("./model/user");

app.use(bodyParser.urlencoded({ extended: true }));

/*
 *Routers
 */
app.use("/auth", userRouter);
app.use("/product", productRouter);
app.use("/public", express.static('public'))

app.use("*", (req, res, next) => {
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

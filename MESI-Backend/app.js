require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const verifyToken = require("./middleware/auth");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const app = express();
app.use(express.json());
app.use(cors());

const fs = require("fs");
const bodyParser = require("body-parser");
const user = require("./model/user");

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(async (req, res, next) => {
//   if (req.headers["x-access-token"]) {
//     const token = req.headers["x-access-token"];
//     const { userId, exp } = await jwt.verify(token, process.env.TOKEN_KEY);
//     if (exp < Date.now().valueOf() / 700000) {
//       return res.status(401).json({
//         error: "JWT token has expired, please login to obtain a new one",
//       });
//     }
//     res.locals.loggedInUser = await user.findById(userId);
//     next();
//   } else {
//     next();
//   }
// });
/*
 *Routers
 */
app.use("/auth", userRouter);

app.use("*", (res) => {
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

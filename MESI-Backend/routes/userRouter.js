const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controllers/userController.js");
const accessController = require("../controllers/accessController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get(
  "/user/:userId",
  accessController.allowIfLogged,
  userController.getUser
);
router.get("/users", accessController.allowIfLogged, userController.getUser);

module.exports = router;

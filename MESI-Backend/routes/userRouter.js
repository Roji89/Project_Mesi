const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const accessController = require("../controllers/accessController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get(
  "/user/:userId",
  accessController.allowIfLogged,
  userController.getUser
);
router.get(
  "/users",
  accessController.allowIfLogged,
  accessController.adminAccess("readAny", "profile"),
  userController.getUsers
);
router.put(
  "/user/:userId",
  accessController.allowIfLogged,
  userController.updateUser
);
router.delete(
  "/user/:userId",
  accessController.allowIfLogged,
  userController.deleteUser
);

module.exports = router;

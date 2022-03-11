const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { register, login } = require("../controllers/userController.js");

router.post("/register", register);
router.post("/login", login);

module.exports = router;

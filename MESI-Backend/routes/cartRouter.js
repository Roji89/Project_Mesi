const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controllers/cartController.js");
const accessController = require("../controllers/accessController");

cartRouter.post("/", cartController.addItemToCart);

cartRouter.get("/", cartController.getCart);
cartRouter.delete("/empty-cart", cartController.emptyCart);

module.exports = cartRouter;
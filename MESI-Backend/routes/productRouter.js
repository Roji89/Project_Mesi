const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController.js");
const accessController = require("../controllers/accessController");

productRouter.post("/add", productController.addProduct);
productRouter.get("/:productId", productController.getProduct);
productRouter.get("/", productController.getProducts);
productRouter.put("/:productId", productController.editProduct);
productRouter.delete("/:productId", productController.deleteProduct);

module.exports = productRouter;

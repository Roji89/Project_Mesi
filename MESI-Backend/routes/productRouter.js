const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController.js");
const accessController = require("../controllers/accessController");

productRouter.post(
  "/add",
  accessController.adminAccess(),
  productController.addProduct
);
productRouter.get(
  "/product/:productId",
  accessController.adminAccess(),
  productController.getProduct
);
productRouter.get(
  "/products",
  accessController.adminAccess(),
  productController.getProducts
);
productRouter.put(
  "/product/:productId",
  accessController.adminAccess(),
  productController.editProduct
);
productRouter.delete(
  "/product/:productId",
  accessController.adminAccess(),
  productController.deleteProduct
);

module.exports = productRouter;

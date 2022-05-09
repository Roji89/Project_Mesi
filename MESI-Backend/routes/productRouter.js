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
  "/:productId",
  productController.getProduct
);
productRouter.get(
  "/",
  productController.getProducts
);
productRouter.put(
  "/:productId",
  accessController.adminAccess(),
  productController.editProduct
);
productRouter.delete(
  "/:productId",
  accessController.adminAccess(),
  productController.deleteProduct
);

module.exports = productRouter;

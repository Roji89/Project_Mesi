const { compare } = require("bcryptjs");
const verifyToken = require("../middleware/auth");
const Product = require("../model/product");
const User = require("../model/user");

/********************
 * ADD new Product
 ********************/
const addProduct = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    const user = await User.findOne({ token });
    const userID = user._id;

    const { name, price, description, image, ProductCode } = req.body;
    const productExisted = await Product.findOne({ ProductCode });

    if (!(name && price && description && image && ProductCode)) {
      return res.status(400).send("All inputs are required");
    }
    if (productExisted) {
      return res
        .status(409)
        .send(
          `Product ${productExisted} Already Exist. Please check the products list`
        );
    }
    console.log("before create");
    const product = await Product.create({
      name: name.toUpperCase(),
      price: price,
      description: description,
      image: image,
      user: userID,
      ProductCode: ProductCode,
    });
    console.log("after create");
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send("can't create product");
  }
};
/********************
 * Edit Product
 ********************/
const editProduct = async (req, res) => {
  try {
    const update = req.body;
    const productId = req.params.productId;
    await Product.findByIdAndUpdate(productId, update);
    res.status(200).json({ data: Product, message: "user has been updated" });
  } catch (error) {
    res.status(400).json({ message: "couldnt update user" });
  }
};
/********************
 * GET ALL Products
 ********************/
const getProducts =
  ("/products",
  async (req, res) => {
    const products = await Product.find({});
    res.status(200).json({ data: products });
  });
/********************
 * GET one Product
 ********************/

const getProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product)
      return res.status(400).json({ error: "product doesnt exist" });
    res.status(200).json(product);
  } catch (error) {}
};
/********************
 * DELETE Product
 ********************/
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    await Product.findByIdAndDelete(productId);
    res.status(200).json({
      data: null,
      message: "product has been deleted!",
    });
  } catch (error) {
    res.status(400).json({ message: "couldnt delete product" });
  }
};

/**
 *
 */
module.exports = {
  addProduct,
  editProduct,
  getProduct,
  getProducts,
  deleteProduct,
};

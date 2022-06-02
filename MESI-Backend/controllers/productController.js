const { compare } = require("bcryptjs");
const Product = require("../model/product");
const User = require("../model/user");
const fs = require("fs");
const { upload } = require("../middleware/multer");

/********************
 * ADD new Product
 ********************/
const addProduct = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    const user = await User.findOne({ token });
    const userID = user._id;

    // const img = fs.readFileSync(req.file.path);
    // const encode_img = img.toString();
    // const image = {
    //   data: fs.readFileSync(
    //     path.join(__dirname + "/uploads/" + req.file.filename)
    //   ),
    //   contentType: req.file.mimetype,
    // };
    // const { name, price, description, ProductCode } = req.body;
    // const productExisted = await Product.findOne({ ProductCode });

    // if (!(name && price && description && ProductCode && image)) {
    //   return res.status(400).send("All inputs are required");
    // }
    // if (productExisted) {
    //   return res
    //     .status(409)
    //     .send(
    //       `Product ${productExisted} Already Exist. Please check the products list`
    //     );
    // }
    const product = await Product.create({
      name: req.body.name.toUpperCase(),
      price: req.body.price,
      description: req.body.description,
      // user: userID,
      ProductCode: req.body.ProductCode,
      image: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.file.filename)
        ),
        contentType: "image/png",
      },
    });
    product.save().then(() => {
      user.products.push(product);
      user.save();
      return res.status(200).json(product);
    });
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
  // addProduct,
  editProduct,
  getProduct,
  getProducts,
  deleteProduct,
};

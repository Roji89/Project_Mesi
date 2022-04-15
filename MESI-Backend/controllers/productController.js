const verifyToken = require("../middleware/auth");

/********************
 * ADD new Product
 ********************/
const addProduct = async (req, res) => {
  try {
    if (verifyToken) {
      const { name, price, description, image, product_code } = req.body;
    } else {
      return res
        .status(400)
        .send("you don't have permission to create product");
    }
  } catch (error) {
    console.log(err);
  }
};
/********************
 * Edit Product
 ********************/
/********************
 * GET ALL Products
 ********************/
/********************
 * GET one Product
 ********************/
/********************
 * DELETE Product
 ********************/

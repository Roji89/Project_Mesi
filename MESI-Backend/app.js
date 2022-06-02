require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const bodyParser = require("body-parser");
const multer = require("multer");
const user = require("./model/user");
const product = require("./model/product");

const app = express();
app.use(express.json());
app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* IMAGES */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

app.post("/products/add", upload.single("image"), async (req, res, next) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    const user = await user.findOne({ token });
    const userID = user._id;

    var img = fs.readFileSync(req.file.path);
    var encode_img = img.toString("base64");
    var final_img = {
      contentType: req.file.mimetype,
      data: new Buffer(encode_img, "base64"),
    };
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
    const products = await product.create({
      name: req.body.name.toUpperCase(),
      price: req.body.price,
      description: req.body.description,
      user: userID,
      ProductCode: req.body.ProductCode,
      image: final_img,
    });
    products.save().then(() => {
      user.products.push(product);
      user.save();
      return res.status(200).json(product);
    });
  } catch (error) {
    return res.status(500).send("can't create product");
  }
});

/*
 *Routers
 */
app.use("/auth", userRouter);
app.use("/product", productRouter);
app.use("/public", express.static("public"));

app.use("*", (req, res, next) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = app;

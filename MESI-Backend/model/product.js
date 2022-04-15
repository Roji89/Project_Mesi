const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    description: { type: String },
    image: { type: String, default: "" },
    seller: { type: String },
    Product_code: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);

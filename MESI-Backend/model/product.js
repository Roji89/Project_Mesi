const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    description: { type: String },
    image: { type: String, default: "" },
    seller: { type: String },
    ProductCode: { type: String, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: {
      type: String,
      unique: true,
      trim: true,
      // validate(value){
      //   if(!validator.isEmail(value)){
      //       throw new Error('Email is in valid')}
      // }
    },
    password: { type: String, required: true, minlength: 5 },
    token: { type: String },
    // avatar:{ type: Buffer, required: false },
    avatar: { type: String, default: "" },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superadmin"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

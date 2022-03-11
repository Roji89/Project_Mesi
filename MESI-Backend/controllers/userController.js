const User = require("../model/user");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");

const register =
  ("/register",
  async (req, res) => {
    try {
      // Get user input
      const { email, password, role } = req.body;

      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }

      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);

      // Create user in our database
      const user = await User.create({
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        role: role || "user",
      });

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "7d",
        }
      );

      // save user token
      user.token = token;
      await user.save();

      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  });

/////////////////// Login user
const login =
  ("/login",
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!email) {
        res.status(400).send("Email does not exist");
      }
      if (!password) {
        res.status(400).send("Password is not correct");
      }

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
          expiresIn: "48h",
        });
        await User.findByIdAndUpdate(user._id, { token });
        res.status(200).send(user);
      } else {
        res.status(400).send("Invalid username or password");
      }
    } catch (err) {
      console.log(err);
    }
  });

//////////////////get Profile

const profile =
  ("/profile",
  auth,
  async (req, res) => {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    const user = await User.findOne({ token });
    if (token) {
      const get_info = [
        req.user.email,
        req.user.first_name,
        req.user.last_name,
        req.user.avatar,
      ];

      return res.status(200).json(get_info);
    }
  });
///////////Edit User

const editProfile =
  ("/profile/edit",
  auth,
  async (req, res) => {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    if (token)
      try {
        const updateUser = await User.findOneAndUpdate(
          req.params._id,
          {
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
          },
          { new: true }
        );

        res.status(200).json(updateUser);
      } catch (err) {
        res.status(500).json(err);
      }
  });
module.exports = {
  register,
  login,
};

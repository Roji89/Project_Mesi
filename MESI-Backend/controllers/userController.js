const User = require("../model/user");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const user = require("../model/user");

/*
 *******Register********
 */
const register =
  ("/register",
  async (req, res) => {
    try {
      const { email, password, role } = req.body;
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const oldUser = await User.findOne({ email });
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }

      encryptedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        email: email.toLowerCase(),
        password: encryptedPassword,
        role: role || "user",
      });

      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "7d",
      });

      user.token = token;
      await user.save();

      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  });

/*
 *******Login********
 */
const login =
  ("/login",
  async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) return next(res.status(400).send("Email does not exist"));

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
          expiresIn: "7d",
        });
        await User.findByIdAndUpdate(user._id, { token: token });
        const updatedUser = await User.findById(user._id);
        res.status(200).send(updatedUser);
      } else {
        res.status(400).send("Invalid username or password");
      }
    } catch (err) {
      console.log(err);
    }
  });

/*
 *******get Users********
 */
const getUsers =
  ("/users",
  async (req, res) => {
    const users = await User.find({});
    res.status(200).json({ data: users });
  });
/*
 *******get User********
 */
const getUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) return res.status(400).json({ error: "user doesnt exist" });
    res.status(200).json(user);
  } catch (error) {
    console.log("wrong request");
  }
};
/*
 *******update User********
 */
const updateUser = async (req, res) => {
  try {

    const update = req.body;
    const userId = req.params.userId;

    // Update user password
    if (update.old_password && update.password) {

      const user = await User.findById(userId);

      if (await bcrypt.compare(update.old_password, user.password)) {

        encryptedPassword = await bcrypt.hash(update.password, 10);
        await User.findByIdAndUpdate(userId, { password: encryptedPassword});
        return res.status(200).json({ message: "Password has been updated" })

      } else {
        return res.status(400).json({ error: "Incorrect actual password" });
      }
    }

    // Update user informations
    await User.findByIdAndUpdate(userId, update);
    const updatedUser = await User.findById(userId);
    res.status(200).json({ user: updatedUser, message: "user has been updated" });
  } catch (error) {
    res.status(400).json({ error: "couldnt update user" });
  }
};

/*
 *******delete User********
 */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      data: null,
      message: "user has been deleted!",
    });
  } catch (error) {
    res.status(400).json({ message: "couldnt delete user" });
  }
};
module.exports = {
  register,
  login,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};

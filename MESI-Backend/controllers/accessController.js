const auth = require("../middleware/auth");
const User = require("../model/user");

exports.adminAccess = () => {
  return async (req, res, next) => {
    try {
      const token =
        req.body.token || req.query.token || req.headers["x-access-token"];
      const user = await User.findOne({ token });
      if (user.role !== "superadmin") {
        return res.status(401).json({ error: "you don't have permission!" });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

exports.allowIfLogged =
  (auth,
  async (req, res, next) => {
    try {
      const token =
        req.body.token || req.query.token || req.headers["x-access-token"];
      const user = await User.findOne({ token });
      if (!user)
        return res.status(401).json({ error: "you need to logged in!" });
      next();
    } catch (error) {
      next(error);
    }
  });

const { roles } = require("../middleware/roles");

exports.grantsAcess = (action, resource) => {
  return async (req, res, next) => {
    try {
      const permission = roles.can(req.user.role)[action](resource);
      if (!permission.granted) {
        return res.status(401).json({ error: "you don't have permission!" });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

exports.allowIfLogged = async (req, res, next) => {
  try {
    const user = res.locals.loggedInUser;
    if (!user) return res.status(401).json({ error: "you need to logged in!" });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

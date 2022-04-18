const User = require("../models/User");

const sessionChecker = async (req, res, next) => {
  if (!req.session.user_id) {
    res.status(401).send({ message: "You don't have permission to access" });
  } else {
    req.user = await User.findOne({ _id: req.session.user_id });
    if (!req.user._id) {
      res.clearCookie("connect.sid");
      return res
        .status(401)
        .send({ message: "You don't have permission to access" });
    }
    next();
  }
};

module.exports = sessionChecker;

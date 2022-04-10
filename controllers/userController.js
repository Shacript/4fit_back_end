const User = require("../models/User");

exports.get_me = (req, res, next) => {
  req.user.password = undefined;
  res.send(req.user);
};

exports.update_me = (req, res, next) => {};

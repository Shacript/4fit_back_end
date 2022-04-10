const User = require("../models/User");

exports.get_me = (req, res, next) => {
  req.user.password = undefined;
  res.send(req.user);
};

exports.update_me = async (req, res, next) => {
  if (req.body.first_name) req.user.first_name = req.body.first_name;
  if (req.body.last_name) req.user.last_name = req.body.last_name;
  if (req.body.date_of_birth) req.user.date_of_birth = req.body.date_of_birth;
  if (req.body.weight) req.user.weight = req.body.weight;
  if (req.body.height) req.user.height = req.body.height;

  await req.user.save();
  req.user.password = undefined;
  res.send(req.user);
};

const User = require("../models/User");

exports.get_me = (req, res, next) => {
  req.user.password = undefined;
  res.send(req.user);
};

exports.get_user_tasks = () => {};

exports.get_user_task = () => {};

exports.get_user_tasks_by_date = () => {};

exports.get_user_records = () => {};

exports.get_user_record = () => {};

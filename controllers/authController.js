const User = require("../models/User");

exports.auth_login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.username }],
    });

    user.comparePassword(req.body.password, (err, match) => {
      if (!match) {
        res
          .status(401)
          .send({ message: "username,email or password are incorrect" });
      } else {
        user.password = undefined;
        req.session.user_id = user._id;
        res.send(user);
      }
    });
  } catch (err) {
    res
      .status(404)
      .send({ message: "username,email or password are incorrect" });
  }
};

exports.auth_register = (req, res, next) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(201).send();
  });
};

exports.auth_logout = (req, res, next) => {
  res.clearCookie("connect.sid");
  res.send();
};

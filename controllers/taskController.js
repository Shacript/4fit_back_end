const Task = require("../models/Task");

exports.get_me_tasks = async (req, res, next) => {
  let tasks;
  if (!req.query.date) {
    tasks = await Task.find({ user_id: req.user._id });
  } else {
    req.query.date.toString();
    tasks = await Task.find({
      user_id: req.user._id,
      schedule: req.query.date,
    });
  }
  res.send(tasks);
};

exports.get_me_task = (req, res, next) => {
  res.send(req.task);
};

exports.create_task = async (req, res, next) => {
  const task = new Task({
    user_id: req.user._id,
    ...req.body,
  });
  task.save((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(201).send(doc);
  });
};

exports.update_task = async (req, res, next) => {
  if (req.body.name) req.task.name = req.body.name;
  if (req.body.type) req.task.type = req.body.type;
  if (req.body.description) req.task.description = req.body.description;
  if (req.body.schedule) req.task.schedule = req.body.schedule;
  if (req.body.activities) req.task.activities = req.body.activities;

  await req.task.save();
  res.send(req.task);
};

exports.delete_task = async (req, res, next) => {
  await req.task.remove();
  res.status(204).send();
};

const Record = require("../models/Record");

exports.get_me_records = async (req, res, next) => {
  const records = await Record.find({
    user_id: req.user._id,
    record_type: req.query.type,
    date: req.query.date,
  });
  res.send(records);
};

exports.get_me_record = (req, res, next) => {
  res.send(req.record);
};

exports.create_record = (req, res, next) => {
  const record = new Record({
    user_id: req.user._id,
    ...req.body,
  });
  record.save((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(201).send(doc);
  });
};

exports.update_record = async (req, res, next) => {
  if (req.body.name) req.record.name = req.body.name;
  if (req.body.type) req.record.type = req.body.type;
  if (req.body.description) req.record.description = req.body.description;
  if (req.body.activities) req.record.activities = req.body.activities;

  await req.record.save();
  res.send(req.record);
};

exports.delete_record = async (req, res, next) => {
  await req.record.remove();
  res.status(204).send();
};

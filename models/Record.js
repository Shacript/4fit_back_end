const mongoose = require("mongoose");

const activitiesSchema = mongoose.Schema({
  name: String,
  duration: Number,
});

const recordSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
  },
  name: {
    type: String,
    required: true,
  },
  record_type: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  description: {
    type: String,
  },
  activities: {
    type: [activitiesSchema],
    required: true,
  },
});

const recordModel = mongoose.model("record", recordSchema);

module.exports = recordModel;

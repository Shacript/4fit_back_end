const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  schedule: {
    type: Array,
  },
  activities: {
    type: Array,
  },
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;

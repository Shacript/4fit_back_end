const mongoose = require("mongoose");

const recordSchema = mongoose.Schema({
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
  },
  description: {
    type: String,
  },
  time_spend: {
    type: Number,
  },
  activities: {
    type: Array,
  },
});

const recordModel = mongoose.model("record", recordSchema);

module.exports = recordModel;

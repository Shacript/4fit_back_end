const express = require("express");
const recordRouter = express.Router();

const recordController = require("../controllers/recordController");

const Record = require("../models/Record");

recordRouter.param("record_id", async (req, res, next, id) => {
  const record = await Record.findById(id);
  if (!record) return res.status(404).send();
  if (record.user_id != req.user._id) return res.status(401).send();
  req.record = record;
  next();
});

recordRouter.get("/", recordController.get_me_records);
recordRouter.get("/:record_id", recordController.get_me_record);

recordRouter.post("/", recordController.create_record);

recordRouter.put("/:record_id", recordController.update_record);

recordRouter.delete("/:record_id", recordController.delete_record);

module.exports = recordRouter;

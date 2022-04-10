const express = require("express");
const taskRouter = express.Router();

const taskController = require("../controllers/taskController");

const Task = require("../models/Task");

taskRouter.param("task_id", async (req, res, next, id) => {
  const task = await Task.findById(id);
  if (!task) return res.status(404).send();
  if (task.user_id != req.user._id) return res.status(401).send();
  req.task = task;
  next();
});

taskRouter.get("/", taskController.get_me_tasks);
taskRouter.get("/:task_id", taskController.get_me_task);

taskRouter.post("/", taskController.create_task);

taskRouter.put("/:task_id", taskController.update_task);

taskRouter.delete("/:task_id", taskController.delete_task);

module.exports = taskRouter;

const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/userController");

const sessionChecker = require("../middlewares/sessionChecker");

userRouter.use(sessionChecker);

userRouter.get("/", userController.get_me);

userRouter.put("/", userController.update_me);

const taskRouter = require("./taskRouter");
userRouter.use("/tasks", taskRouter);

const recordRouter = require("./recordRouter");
userRouter.use("/records", recordRouter);

module.exports = userRouter;

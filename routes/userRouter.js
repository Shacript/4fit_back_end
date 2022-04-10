const express = require("express");
const authRouter = express.Router();

const userController = require("../controllers/userController");

authRouter.get("/me", userController.get_me);

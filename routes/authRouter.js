const express = require("express");
const authRouter = express.Router();

const authController = require("../controllers/authController");

authRouter.post("/login", authController.auth_login);

authRouter.post("/register", authController.auth_register);

authRouter.get("/logout", authController.auth_logout);

module.exports = authRouter;

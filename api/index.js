// api

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: "https://4fit-exercise.netlify.app",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());
app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.SESSION_KEY,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_DB_URI,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      httpOnly: true,
      sameSite: "none",
    },
  })
);

app.get("/api", (req, res, next) => {
  res.send({ response: "I'm Dead." });
});

app.use(async (req, res, next) => {
  await mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return next();
});

const authRouter = require("../routes/authRouter");
app.use("/api", authRouter);

const meUserRouter = require("../routes/meUserRouter");
app.use("/api/user/me", meUserRouter);

module.exports = app;

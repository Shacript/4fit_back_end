const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res, next) => {
  res.send({ response: "working fine !" });
});

const authRouter = require("./routes/authRouter");
app.use(authRouter);

const meUserRouter = require("./routes/meUserRouter");
app.use("/user/me", meUserRouter);

app.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
});

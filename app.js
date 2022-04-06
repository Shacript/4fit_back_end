const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());
app.use(
  session({
    key: "user_sid",
    secret: "thisisrandomstuffkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
);

// app.use((req, res, next) => {
//   if (req.session.user && req.cookies.user_sid) {
//     res.redirect("/dashboard");
//   }
//   next();
// });

// const sessionChecker = (req, res, next) => {
//   if (req.session.user && req.cookies.user_sid) {
//     res.redirect("/dashboard");
//   } else {
//     next();
//   }
// };

app.get("/", (req, res, next) => {
  res.send({ response: "working fine !" });
});

app.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
});

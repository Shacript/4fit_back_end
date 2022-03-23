const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

app.get("/", (req, res, next) => {
  res.send({ response: "working fine !" });
});

app.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
});

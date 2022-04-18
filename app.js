const mongoose = require("mongoose");
const app = require("./api/index.js");

require("dotenv").config();

const PORT = process.env.PORT || 4001;

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

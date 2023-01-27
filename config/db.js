const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connection = () => {
  return mongoose.connect(process.env.db_url);
};

module.exports = connection;

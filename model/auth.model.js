const mongoose = require("mongoose");
const authSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    type: String,
  },
});
const authModel = mongoose.model("users", authSchema);
module.exports = authModel;

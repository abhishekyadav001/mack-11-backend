const mongoose = require("mongoose");
const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  score: {
    type: Number,
    required: false,
    default: 0,
  },
  level: {
    type: String,
    required: true,
  },
});
const usersModel = mongoose.model("users", usersSchema);
module.exports = usersModel;

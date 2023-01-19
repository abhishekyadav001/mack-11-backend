const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  title: { type: String, require: true },
  color: { type: String, require: true },
  categories: { type: String, require: true },
});

const BugsModel = mongoose.model("bugs", bugSchema);

module.exports = { BugsModel };

const mongoose = require("mongoose");
const jobSchema = mongoose.Schema({
  companyName: {
    required: true,
    unique: true,
    type: String,
  },
  position: {
    required: true,
    type: String,
  },
  contract: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
});

const jobModel = mongoose.model("jobs", jobSchema);
module.exports = jobModel;

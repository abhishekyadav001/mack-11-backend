const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connection = () => {
  mongoose.connect("mongodb+srv://root:root@cluster0.yd4ww45.mongodb.net/bughunter");
};
module.exports = { connection };

const express = require("express");
const app = express();
const CORS = require("cors");

require("dotenv").config();
const port = process.env.PORT || 8080;
app.use(CORS());
app.use(express.json());

app.get("/", (req, res) => {
  if (req.url == "/") {
    res.send("hello");
    res.end();
  }
});

app.listen(port, async () => {
  try {
    console.log("Connected to DB successfully");
  } catch (err) {
    console.log("connection failed");
    console.log(err);
  }
  console.log("listing to port 8080");
});

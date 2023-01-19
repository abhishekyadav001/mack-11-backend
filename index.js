const express = require("express");
const app = express();
const CORS = require("cors");

require("dotenv").config();

app.use(CORS());
app.use(express.json());

app.get("/", (req, res) => {
  if (req.url == "/") {
    res.send("hello");
    res.end();
  }
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to DB successfully");
  } catch (err) {
    console.log("connection failed");
    console.log(err);
  }
  console.log("listing to port 8080");
});

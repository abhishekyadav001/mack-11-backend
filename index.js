const port = process.env.PORT || 8080;
const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const userRoute = require("./route/users.route");
const connection = require("./config/db");

app.use("/rand", userRoute);
const wordRoute = require("./route/word.route");
app.use("/word", wordRoute);
app.use("/", (req, res) => {
  res.send("Home page");
});
app.listen(port, async () => {
  try {
    await connection();
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("listeneing port", port);
});

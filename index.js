const port = process.env.PORT || 8080;
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
// first call
// Auth route
const authRoute = require("./route/auth.route");
app.use("/auth", authRoute);
// job route
const jobRoute = require("./route/job.route");
app.use("/job", jobRoute);

app.listen(port, async () => {
  try {
    await connection();
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("listeneing port", port);
});

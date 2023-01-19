const express = require("express");
require("dotenv").config();
const { hash } = require("bcrypt");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { connection } = require("./Config/db");
const { UserModel } = require("./Models/User.model");
const app = express();
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page");
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    bcrypt.hash(password, 6, async (err, result) => {
      const user = await UserModel.create({ email, password: result });
      res.send({ msg: "signin successfully please login now" });
    });
  } catch (error) {
    console.log(error);
    res.send({ error: "something went wrong please try again" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length) {
      const hashed = user[0].password;
      bcrypt.compare(password, hashed, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "secret");
          res.send({ msg: "Login Successful", token: token });
        }
      });
    } else {
      res.send({ err: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.send({ err: "something went wrong" });
  }
});

app.listen(port, async () => {
  try {
    await connection();
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("listeneing port 8080");
});

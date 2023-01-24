const express = require("express");
const authRoute = express.Router();
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const authModel = require("../model/auth.model");
const secretKey = process.env.secretkey;
authRoute.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  let role = "user";
  const a = email.trim().split("@");
  if (a[1] == "@masaischool.com") {
    role = "admin";
  }
  const hash = await argon2.hash(password);
  try {
    const user = await authModel.create({ name, email, password: hash, role: role });
    res.status(201).send({ msg: "signup successfully", error: false });
  } catch (error) {
    res.send({ msg: error.message, error: true });
  }
});
authRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await authModel.findOne({ email });
    const hashPassword = user.password;
    const check = await argon2.verify(hashPassword, password);
    if (check) {
      const token = await jwt.sign({ id: user._id, email: user.email, role: user.role }, secretKey, {
        expiresIn: "1d",
      });
      res.status(201).send({ msg: "login successfully", token: token, limit: "24h" });
    } else {
      res.status(403).send({ msg: "please fill correct credentials" });
    }
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = authRoute;

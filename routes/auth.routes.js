const express = require("express");
const { authsignupController } = require("../controller/auth.controller");
const authRoute = express.Router();
const { authModel } = require("../model/auth.model");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const secret_key = process.env.secretkey;
// signup router
authRoute.post("/signup", async (req, res) => {
  // getting data
  const { name, email, password } = req.body;
  const hash = await argon2.hash(password);

  try {
    const user = await authModel.create({ name, email, password: hash });
    res.send(user);
  } catch (error) {
    res.send(error.massage);
  }
});

authRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await authModel.findOne({ email });

    const hashPassword = user.password;
    const check = await argon2.verify(hashPassword, password);
    if (check) {
      const token = jwt.sign({ id: user._id, email: user.email }, secret_key, { expiresIn: "10m" });

      res.status(201).send({ msg: "login Successfully", token });
    }
  } catch (error) {
    res.status(401).send({ msg: error.message });
  }
});

module.exports = authRoute;

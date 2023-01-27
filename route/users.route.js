const express = require("express");
const usersModel = require("../model/users.model");
const usersRoute = express.Router();

usersRoute.get("/", async (req, res) => {
  try {
    const users = await usersModel.find();
    res.status(201).send(users);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

usersRoute.post("/add", async (req, res) => {
  const { name, score, level } = req.body;
  try {
    const users = await usersModel.create({ name: name, level: level, score: score });
    res.status(201).send(users);
  } catch (error) {
    res.status(401).send(error.message);
  }
});


module.exports = usersRoute;

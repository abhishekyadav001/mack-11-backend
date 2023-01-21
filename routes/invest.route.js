const express = require("express");
const { authsignupController } = require("../controller/auth.controller");
const investRoute = express.Router();

investRoute.post("/", async (req, res) => {
  const { P, r, n } = req.body;
  if (!P || !r || !n) return res.status(400).send({ message: "Requirement fields are empty", error: true });

  try {
    let f = (P * ((1 + i) ** n - 1)) / i;
    let tmi = P * n;
    let tig = f - tmi;
    res.status(201).send({ data: { P: f, tmi: tmi, tig: tig } });
  } catch (error) {
    res.send(error.massage);
  }
});
module.exports = investRoute;

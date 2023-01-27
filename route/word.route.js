const express = require("express");
const wordRoute = express.Router();
wordRoute.get("/", (req, res) => {
  res.send("word");
});
wordRoute.get("/randomeword", async (req, res) => {
  try {
    const x = randomWords();
    res.status(201).send({ word: x });
  } catch (error) {
    res.send(error.message);
  }
});
function randomWords() {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  let alllet = letters.trim().split("");
  let words = "";

  for (let i = 0; i < Math.floor(Math.random() * (8 - 3) + 4); i++) {
    words += alllet[Math.floor(Math.random() * alllet.length)];
  }

  return words;
}

module.exports = wordRoute;

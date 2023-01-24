const express = require("express");
const jobModel = require("../model/job.model");
const jobRoute = express.Router();

// get data

jobRoute.get("/", async (req, res) => {
  try {
    const jobs = await jobModel.find();
    res.status(201).send(jobs);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

// for adding data in job database

jobRoute.post("/add", async (req, res) => {
  const { companyName, position, contract, location } = req.body;
  try {
    const jobs = await jobModel.create({
      companyName: companyName,
      position: position,
      contract: contract,
      location: location,
    });
    res.status(201).send({ msg: "job added successfully", error: false });
  } catch (error) {
    res.status(403).send(error.message);
  }
});
jobRoute.get("/search?:q", async (req, res) => {
  const { q } = req.query;
  console.log(q);
  try {
    const jobs = await jobModel.find({ companyName: q });
    res.send(jobs);
  } catch (error) {
    res.send(error.message);
  }
});
module.exports = jobRoute;

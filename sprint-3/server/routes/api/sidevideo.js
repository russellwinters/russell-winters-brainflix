const express = require("express");
const router = require("router");
const apiName = __dirname + "../../model/sidevideo.json";
const videos = require(apiName);

//Currently the api .get method will requires the path /api/sidevideos and returns all of them.
router.get("/", (req, res) => {
  res.json(videos);
});

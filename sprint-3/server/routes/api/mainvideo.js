const express = require("express");
const router = express.Router();
const mainvideos = __dirname + "/../../model/mainvideo.json";
const videocontent = require(mainvideos);
const helperFile = "../../helper/helper.js";
const helper = require(helperFile);

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  console.log(videocontent[0].id);
  // function to give boolean whether I have id match or not
  const haveMatch = videocontent.some(video => video.id === req.params.id);
  //function to return that specific video OR throw error
  if (haveMatch) {
    res.json(videocontent.filter(video => video.id === req.params.id));
  } else {
    res.status(400).json({
      errorMessage: `The requested video with ID ${req.params.id} was not found`
    });
  }
});

router.post("/", (req, res) => {
  console.log(videocontent);
  const newUpload = new Object();
  newUpload["id"] = helper.giveID();
  newUpload["title"] = req.body.title;
  newUpload["description"] = req.body.description;

  let upload = videocontent.concat(newUpload);
  helper.syncJSONFile(mainvideos, upload);
  console.log(upload);
  res.json({ Message: "Complete" });
});
module.exports = router;

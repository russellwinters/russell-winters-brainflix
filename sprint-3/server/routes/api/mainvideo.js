const express = require("express");
const router = express.Router();
const mainvideos = __dirname + "/../../model/mainvideo.json";
const videocontent = require(mainvideos);
const sidevideos = __dirname + "/../../model/sidevideo.json";
const sidevideocontent = require(sidevideos);
const helperFile = "../../helper/helper.js";
const helper = require(helperFile);
const CORS = require("cors");

router.use(CORS());

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

//Pretty sure I don't actually need the CORS on this call. Had a different issue I was trying to
//debug, but this should manually give that header to the post request.
router.post("/", CORS({ "Access-Control-Allow-Origin": "*" }), function(
  req,
  res
) {
  console.log(req);
  //Adding an object that I'm going to push to the JSON files.
  const newUpload = new Object();
  newUpload["id"] = helper.giveID();
  newUpload["title"] = req.body.title;
  newUpload["description"] = req.body.description;
  newUpload["image"] = req.body.image;
  newUpload["channel"] = req.body.channel;
  //sync post to main videos
  //Using concat to add new Object to the end of the array that is the JSON file.
  let upload = videocontent.concat(newUpload);
  helper.syncJSONFile(mainvideos, upload);
  //sync post to side videos
  let sidevideoupload = sidevideocontent.concat(newUpload);
  helper.syncJSONFile(sidevideos, sidevideoupload);
  console.log(upload);
  res.json({ Message: "Complete" });
});
module.exports = router;

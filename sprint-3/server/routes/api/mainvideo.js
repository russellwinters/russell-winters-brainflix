const express = require("express");
const router = express.Router();
const mainvideos = __dirname + "/../../model/mainvideo.json";
const videocontent = require(mainvideos);

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  console.log(videocontent[0].id);

  //function to give boolean whether I have id match or not
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

module.exports = router;

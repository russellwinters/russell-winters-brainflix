const express = require("express");
const path = require("path");

const app = express();

// const axios = require("axios");
// const fs = require("fs");

//Function *did* get API data from past projects and add it to my API
// const projectKey = "4d27b0a1-1ba3-4823-a43c-632131c75720";
// const currentID = "1a8qhruuzky3";
// const videoURL = `https://project-2-api.herokuapp.com/videos/${currentID}?api_key=${projectKey}`;
// axios.get(videoURL).then(r => {
//   console.log(r.data);
//   fs.writeFile(
//     `./model/videos/${currentID}.json`,
//     JSON.stringify(r.data),
//     err => {
//       if (err) {
//         console.log(err);
//       }
//       console.log("file has been saved");
//     }
//   );
// });

//SideVideo API
app.use("/api/sidevideos", require("./routes/api/sidevideo"));

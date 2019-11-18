const express = require("express");
// const path = require("path");
const CORS = require("cors");
const app = express();

app.use(CORS());
app.use(express.json());
//SideVideo API - only contains get request
app.use("/api/sidevideos", require("./routes/api/sidevideo"));

//Has get request for main videos as well as post request from Upload Page. It posts to both mainvideo and sidevideo API, although it's not perfect
//Post sends a little too much information to sidevideos.
app.use("/api/mainvideos", require("./routes/api/mainvideo"));

//Setting up the listening function for the Server.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

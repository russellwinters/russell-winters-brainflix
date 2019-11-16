const express = require("express");
const path = require("path");
const CORS = require("cors");
const app = express();

app.use(CORS());
app.use(express.json());
//SideVideo API
app.use("/api/sidevideos", require("./routes/api/sidevideo"));

app.use("/api/mainvideos", require("./routes/api/mainvideo"));

//Setting up the listening function for the Server.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

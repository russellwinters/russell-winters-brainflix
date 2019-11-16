const fs = require("fs");
const uuid = require("uuid/v4");

//Function to give ID to new comment
function giveID() {
  return uuid();
}

//Function to sync JSON File
function syncJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf-8", err => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`changes saved to ${filename}`);
}

//exporting functions
module.exports = {
  syncJSONFile,
  giveID
};

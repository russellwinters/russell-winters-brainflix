const fs = require("fs");
const uuid = require("uuid/v4");

//Function to give ID to new comment
function giveID() {
  return uuid();
}

//Function to sync JSON File
//It actually writes a new file to the filename, so I use a concat method to add to json array before I use.
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

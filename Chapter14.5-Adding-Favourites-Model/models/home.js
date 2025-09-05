const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");
module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    this.id = Math.round(Math.random() * 100).toString();
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }
  static fetchAll(callback) {
    const filepath = path.join(rootDir, "data", "homes.json");
    fs.readFile(filepath, (error, data) => {
      console.log("errror while reading File", error);
      if (!error) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === homeId);
      callback(homeFound);
    });
  }
};

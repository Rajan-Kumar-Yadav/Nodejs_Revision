const db = require("../utils/databaseUtil");
module.exports = class Home {
  constructor(id, houseName, price, location, rating, photoUrl, description) {
    this.id = id;
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }

  save() {
    if (this.id) {
      return db.execute(
        `INSERT INTO homes( id,houseName, price,location,rating,photoUrl,description, ) VALUES (?,?,?,?,?,?,?)`,
        [
          this.id,
          this.houseName,
          this.price,
          this.location,
          this.rating,
          this.photoUrl,
          this.description,
        ]
      );
    } else {
      return db.execute(
        `INSERT INTO homes(houseName, price,location,rating,photoUrl,description) VALUES (?,?,?,?,?,?)`,
        [
          this.houseName,
          this.price,
          this.location,
          this.rating,
          this.photoUrl,
          this.description,
        ]
      );
    }
  }
  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId) {
    return db.execute("SELECT * FROM homes WHERE id=?", [homeId]);
  }

  static deleteById(homeId) {
    return db.execute("DELETE FROM homes WHERE id=?", [homeId]);
  }
};

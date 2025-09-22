const { ObjectId } = require("mongodb");
const { getDB } = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, _id) {
    console.log(
      "constructor value",

      houseName,
      price,
      location,
      rating,
      photoUrl,
      description,
      _id
    );

    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    if (_id) {
      this._id = _id;
    }
  }

  save() {
    const db = getDB();
    if (this._id) {
      //update Case
      const updateFields = {
        houseName: this.houseName,
        price: this.price,
        location: this.location,
        rating: this.rating,
        photoUrl: this.photoUrl,
        description: this.description,
      };
      return db
        .collection("homes2")
        .updateOne(
          { _id: new ObjectId(String(this._id)) },
          { $set: updateFields }
        );
    } else {
      // insert Case
      return db.collection("homes2").insertOne(this);
    }
  }
  static fetchAll() {
    const db = getDB();
    return db.collection("homes2").find().toArray();
  }

  static findById(homeId) {
    const db = getDB();
    return db
      .collection("homes2")
      .find({ _id: new ObjectId(String(homeId)) })
      .next();
  }

  static deleteById(homeId) {
    const db = getDB();
    return db
      .collection("homes2")
      .deleteOne({ _id: new ObjectId(String(homeId)) });
  }
};

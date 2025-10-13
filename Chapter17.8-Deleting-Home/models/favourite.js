const { getDB } = require("../utils/databaseUtil");

module.exports = class Favourite {
  constructor(houseId) {
    this.houseId = houseId;
  }

  save() {
    const db = getDB();
    return db
      .collection("favourites2")
      .findOne({ houseId: this.houseId })
      .then((exisitingFav) => {
        if (!exisitingFav) {
          return db.collection("favourites2").insertOne(this);
        }
        return Promise.resolve();
      });
  }

  static getFavourites() {
    const db = getDB();
    return db.collection("favourites2").find().toArray();
  }
  static deleteFavouriteById(delHomeId) {
    const db = getDB();
    return db.collection("favourites2").deleteOne({ houseId: delHomeId });
  }
};

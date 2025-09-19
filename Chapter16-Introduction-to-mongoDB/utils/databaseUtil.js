const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const MONGO_URL =
  "mongodb+srv://Rajan:Rajan@rajancoding.hthpzj0.mongodb.net/?retryWrites=true&w=majority&appName=RajanCoding";

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      callback(client);
    })
    .catch((err) => {
      console.log("Error while connecting to Mongo", err);
    });
};

module.exports = mongoConnect;

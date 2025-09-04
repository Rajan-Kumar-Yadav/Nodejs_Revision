const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addhome", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
  });
};
exports.postAddHome = (req, res, next) => {
  console.log("request body", req.body);
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.render("host/home-added", {
    pageTitle: "Home added Successfully",
    currentPage: "addHome",
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((home) => {
    res.render("host/host-home-list", {
      registeredHomes: home,
      pageTitle: "host-home-list",
      currentPage: "host-homes",
    });
  });
};

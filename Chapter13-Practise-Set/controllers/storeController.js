const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((home) => {
    console.log("Registration homepage", home);
    res.render("index", {
      registeredHomes: home,
      pageTitle: "airbnb Home",
      currentPage: "index",
    });
  });
};
exports.getHomes = (req, res, next) => {
  Home.fetchAll((home) => {
    console.log("Registration homepage", home);
    res.render("store/home-list", {
      registeredHomes: home,
      pageTitle: "airbnb Home",
      currentPage: "home-list",
    });
  });
};

exports.getFavouriteList = (req, res, next) => {
  res.render("store/favourite-list", {
    pageTitle: "FavouriteList",
    currentPage: "favourites",
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "Booking",
    currentPage: "bookings",
  });
};

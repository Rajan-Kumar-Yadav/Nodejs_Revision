const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((home) => {
    res.render("index", {
      registeredHomes: home,
      pageTitle: "airbnb Home",
      currentPage: "index",
    });
  });
};
exports.getHomes = (req, res, next) => {
  Home.fetchAll((home) => {
    res.render("store/home-list", {
      registeredHomes: home,
      pageTitle: "airbnb Home",
      currentPage: "home-list",
    });
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites((favourites) => {
    console.log("getFavorites list favourites", favourites);
    Home.fetchAll((registeredHomes) => {
      console.log("getFavorites list registeredHOmes", registeredHomes);
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(home.id)
      );
      console.log("favouriteHomes after filter", favouriteHomes);
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "FavouriteList",
        currentPage: "favourites",
      });
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "Booking",
    currentPage: "bookings",
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home not found ");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Details",
        currentPage: "Home",
      });
    }
  });
};

exports.postAddFavourites = (req, res, next) => {
  console.log("came to add to favourites", req.body);
  Favourite.addFavourites(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking Favourite", error);
    }
    res.redirect("/favourites");
  });
};

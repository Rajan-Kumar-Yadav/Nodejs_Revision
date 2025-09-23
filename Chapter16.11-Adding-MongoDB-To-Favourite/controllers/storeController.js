const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
      editing: false,
    });
  });
};
exports.getHomes = (req, res, next) => {
  const editing = req.query.editing === "true";
  console.log("editing", editing);
  Home.fetchAll().then((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "home-list",
      editing: editing,
    });
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites().then((favourites) => {
    favourites = favourites.map((fav) => fav.houseId);
    Home.fetchAll().then((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(home._id.toString())
      );
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "FavouriteList",
        currentPage: "favourites",
      });
    });
  });
};
exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("PostRemoveFromFavourite homeId", homeId);
  Favourite.deleteFavouriteById(homeId)
    .then((result) => {
      console.log("Fav Removed:", result);
    })
    .catch((err) => {
      console.log("Error while removing favourites:", err);
    })
    .finally(() => {
      res.redirect("/favourites");
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
  Home.findById(homeId).then((homes) => {
    console.log("Homes found by id ", homes);
    if (!homes) {
      console.log("home not found ");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: homes,
        pageTitle: "Home Details",
        currentPage: "Home",
      });
    }
  });
};

exports.postAddFavourites = (req, res, next) => {
  console.log("req body postAddFavourites", req.body);
  const homeId = req.body.id;
  const fav = new Favourite(homeId);
  fav
    .save()
    .then((result) => {
      console.log("Fav added", result);
    })
    .catch((err) => {
      console.log("Error while marking favourites", err);
    })
    .finally(() => {
      res.redirect("/favourites");
    });
};

// core module
const path = require('path');

const express = require('express');

const userRouter = express.Router();

// local module
const rootDir = require('../utils/pathUtils');
const storeController = require('../controllers/storeController');

userRouter.get("/",storeController.getHomes);
module.exports = userRouter;
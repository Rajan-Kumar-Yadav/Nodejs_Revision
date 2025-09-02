// core module
const path = require('path');
const express = require('express');

const hostRouter = express.Router();

// local module
const rootDir = require('../utils/pathUtils');
const hostController = require('../controllers/hostController');

hostRouter.get("/add-home",hostController.getAddHome);

hostRouter.post("/add-home",hostController.postAddHome);


module.exports = hostRouter;


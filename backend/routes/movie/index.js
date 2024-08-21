var express = require("express");
var movRoute = express.Router();

var { movieRouter } = require("./movies.routes");

movRoute.use("/", movieRouter);

module.exports = { movRoute };

var express = require("express");
const { userRouters } = require("./user.route");
var userRoute = express.Router();

userRoute.use("/", userRouters);

module.exports = { userRoute };

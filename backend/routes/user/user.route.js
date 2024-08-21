var express = require("express");
var userRouters = express.Router();

/* GET ALL user listing for dropdown */

userRouters.get("/", () => console.log("User route for testing"));

module.exports = { userRouters };

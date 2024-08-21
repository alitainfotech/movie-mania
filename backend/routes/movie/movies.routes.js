var express = require("express");
var movieRouter = express.Router();

const { validateApi } = require("../../middlewares/validator");
const { coverPic } = require("../../services/fileUpload");
const {
  addMovieValidations,
} = require("../../validation_rules/movie/movie.validation");
const {
  addMovie,
  updateMovie,
  listMovies,
  getOneMovie,
} = require("../../controllers/movie/movie.controller");
const { auth } = require("../../middlewares/auth.guard");

/* List movies*/
movieRouter.post("/list", auth, listMovies);

/* Fetch one  movies*/
movieRouter.get("/:id", auth, getOneMovie);
/* Add movies*/
movieRouter.post(
  "/create",
  auth,
  coverPic.single("file"),
  addMovieValidations(),
  validateApi,
  addMovie
);
movieRouter.put("/update/:id", auth, coverPic.single("file"), updateMovie);

module.exports = { movieRouter };

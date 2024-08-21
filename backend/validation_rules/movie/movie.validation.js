const { checkSchema } = require("express-validator");
const { MOVIE_MESSAGES } = require("../../controller-messages/movie.messages");

const addMovieValidations = () => {
  return checkSchema({
    name: {
      exists: {
        errorMessage: MOVIE_MESSAGES.NAME_MISSING,
      },
      notEmpty: {
        errorMessage: MOVIE_MESSAGES.NAME_EMPTY,
      },
    },
  });
};

module.exports = {
  addMovieValidations,
};

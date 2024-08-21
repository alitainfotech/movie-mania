const {
  RESPONSE_PAYLOAD_STATUS_SUCCESS,
  RESPONSE_STATUS_CODE_OK,
  RESPONSE_PAYLOAD_STATUS_ERROR,
  RESPONSE_STATUS_CODE_INTERNAL_SERVER_ERROR,
  RESPONSE_STATUS_MESSAGE_INTERNAL_SERVER_ERROR,
  AUTH_USER_DETAILS,
} = require("../../constants/global.constants");
const { passwordHash, comparePasswordHash } = require("../../helpers/fn");

const { AUTH_MESSAGES } = require("../../controller-messages/auth.messages");

const authService = require("../../services/auth.service");
const User = require("../../models/user/user.model");
const Movie = require("../../models/movie/movie.model");

/* Movie Listing// METHOD: GET */
const listMovies = async (req, res) => {
  try {
    let { page: current_page } = req.body;
    let perPage = 8;
    let skip = (parseInt(current_page) - 1) * perPage;
    let movieCount = await Movie.countDocuments();
    let movies = await Movie.find().skip(skip).limit(perPage);
    const resPayload = {
      data: movies,
      pagination: {
        per_page: perPage,
        total_pages: Math.ceil(movieCount / perPage),
        current_page: parseInt(current_page),
      },
    };

    if (movies.length > 0 && movieCount > 0) {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_SUCCESS,
        message: "Movies found",
        data: resPayload,
        error: null,
      };
      return res.status(RESPONSE_STATUS_CODE_OK).json(responsePayload);
    } else {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_SUCCESS,
        message: "Movies not found",
        data: resPayload,
        error: null,
      };
      return res.status(RESPONSE_STATUS_CODE_OK).json(responsePayload);
    }
  } catch (error) {
    const responsePayload = {
      status: RESPONSE_PAYLOAD_STATUS_ERROR,
      message: null,
      data: null,
      error: RESPONSE_STATUS_MESSAGE_INTERNAL_SERVER_ERROR,
    };
    return res
      .status(RESPONSE_STATUS_CODE_INTERNAL_SERVER_ERROR)
      .json(responsePayload);
  }
};

/* Add movie API with Authorization // METHOD: POST  // PAYLOAD: {name, publishing_year,file}*/
const addMovie = async (req, res) => {
  try {
    const { _id } = req[AUTH_USER_DETAILS];
    const { name, publishing_year } = req.body;
    let addObj = { name, publishing_year, created_by: _id };
    if (req.file) {
      const accessPath = "/images/cover" + "/" + req.file.filename;
      addObj = { ...addObj, cover_pic: accessPath };
    }
    const added = await Movie.create({
      ...addObj,
    });

    if (added) {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_SUCCESS,
        message: "Movie added",
        data: null,
        error: null,
      };
      return res.status(RESPONSE_STATUS_CODE_OK).json(responsePayload);
    } else {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_ERROR,
        error: "Movie not added",
        data: null,
        message: null,
      };
      return res.status(RESPONSE_STATUS_CODE_OK).json(responsePayload);
    }
  } catch (error) {
    console.log("errrrr", error);
    const responsePayload = {
      status: RESPONSE_PAYLOAD_STATUS_ERROR,
      message: null,
      data: null,
      error: RESPONSE_STATUS_MESSAGE_INTERNAL_SERVER_ERROR,
    };
    return res
      .status(RESPONSE_STATUS_CODE_INTERNAL_SERVER_ERROR)
      .json(responsePayload);
  }
};

/* UPDATE API with Authorization // METHOD: PUT // PAYLOAD:  {name, publishing_year,file} */
const updateMovie = async (req, res) => {
  try {
    const { _id } = req[AUTH_USER_DETAILS];
    const { id } = req.params;
    const { name, publishing_year } = req.body;
    let updateObj = { name, publishing_year, updated_by: _id };

    if (req.file) {
      const accessPath = "/images/cover" + "/" + req.file.filename;
      updateObj = { ...updateObj, cover_pic: accessPath };
    }

    const updated = await Movie.findByIdAndUpdate(
      id,
      { ...updateObj },
      { new: true }
    );

    if (updated) {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_SUCCESS,
        message: "Movie updated",
        data: null,
        error: null,
      };
      return res.status(RESPONSE_STATUS_CODE_OK).json(responsePayload);
    } else {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_ERROR,
        error: "Movie not updated",
        data: null,
        message: null,
      };
      return res.status(RESPONSE_STATUS_CODE_OK).json(responsePayload);
    }
  } catch (error) {
    console.log("errrrr", error);

    const responsePayload = {
      status: RESPONSE_PAYLOAD_STATUS_ERROR,
      message: null,
      data: null,
      error: RESPONSE_STATUS_MESSAGE_INTERNAL_SERVER_ERROR,
    };
    return res
      .status(RESPONSE_STATUS_CODE_INTERNAL_SERVER_ERROR)
      .json(responsePayload);
  }
};

/* Get One API with Authorization // METHOD: GET */
const getOneMovie = async (req, res) => {
  try {
    const { _id } = req[AUTH_USER_DETAILS];
    const { id } = req.params;
    // const { name, publishing_year } = req.body;
    // let updateObj = { name, publishing_year, updated_by: _id };

    // if (req.file) {
    //   const accessPath = "/images/cover" + "/" + req.file.filename;
    //   updateObj = { ...updateObj, cover_pic: accessPath };
    // }

    const movie = await Movie.findById(id);

    if (movie) {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_SUCCESS,
        message: "Found movie",
        data: movie,
        error: null,
      };
      return res.status(RESPONSE_STATUS_CODE_OK).json(responsePayload);
    } else {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_SUCCESS,
        message: "Not found the selected movie",
        data: {},
        error: null,
      };
      return res.status(RESPONSE_STATUS_CODE_OK).json(responsePayload);
    }
  } catch (error) {
    console.log("errrrr", error);

    const responsePayload = {
      status: RESPONSE_PAYLOAD_STATUS_ERROR,
      message: null,
      data: null,
      error: RESPONSE_STATUS_MESSAGE_INTERNAL_SERVER_ERROR,
    };
    return res
      .status(RESPONSE_STATUS_CODE_INTERNAL_SERVER_ERROR)
      .json(responsePayload);
  }
};

module.exports = {
  listMovies,
  addMovie,
  updateMovie,
  getOneMovie,
};

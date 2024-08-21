import { movieAPIs } from "../services/movie.service";
import {
  addMovieRequest,
  addMoviesError,
  addMoviesSuccess,
  deleteMovieRequest,
  deleteMoviesError,
  deleteMoviesSuccess,
  getMoviesError,
  getMoviesRequest,
  getMoviesSuccess,
  oneMovieError,
  oneMovieRequest,
  oneMovieSuccess,
  updateMovieRequest,
  updateMoviesError,
  updateMoviesSuccess,
} from "../store/slices/movie.slice";

export const getMovieList = (page) => {
  return async (dispatch) => {
    dispatch(getMoviesRequest());
    await movieAPIs
      .fetchMovies(page)
      .then((res) => {
        const { status, data, error } = res.data;
        if (status) {
          dispatch(
            getMoviesSuccess({ data: data.data, pagination: data.pagination })
          );
        } else {
          dispatch(getMoviesError(error));
        }
      })
      .catch((error) => {
        dispatch(getMoviesError(error));
      });
  };
};

export const addMovie = (payload) => {
  return async (dispatch) => {
    dispatch(addMovieRequest());
    await movieAPIs
      .addMovie(payload)
      .then((res) => {
        const { status, message, error } = res.data;
        if (status) {
          dispatch(addMoviesSuccess(message));
        } else {
          dispatch(addMoviesError(error));
        }
      })
      .catch((error) => {
        dispatch(addMoviesError(error));
      });
  };
};

export const getOneMovieToUpdate = (id) => {
  return async (dispatch) => {
    dispatch(oneMovieRequest());
    await movieAPIs
      .getOneMovie(id)
      .then((res) => {
        const { status, message, data, error } = res.data;
        if (status) {
          dispatch(oneMovieSuccess({ message, data }));
        } else {
          dispatch(oneMovieError(error));
        }
      })
      .catch((error) => {
        dispatch(oneMovieError(error));
      });
  };
};
export const updateMovie = (id, payload) => {
  return async (dispatch) => {
    dispatch(updateMovieRequest());
    await movieAPIs
      .updateMovie(id, payload)
      .then((res) => {
        const { status, message, error } = res.data;
        if (status) {
          dispatch(updateMoviesSuccess(message));
        } else {
          dispatch(updateMoviesError(error));
        }
      })
      .catch((error) => {
        dispatch(updateMoviesError(error));
      });
  };
};

export const deleteLandingPages = (id) => {
  return async (dispatch) => {
    dispatch(deleteMovieRequest());
    await movieAPIs
      .deleteMovie(id)
      .then((res) => {
        const { status, error, message } = res.data;
        if (status) {
          dispatch(deleteMoviesSuccess(message));
        } else {
          dispatch(deleteMoviesError(error));
        }
      })
      .catch((error) => {
        dispatch(deleteMoviesError(error));
      });
  };
};

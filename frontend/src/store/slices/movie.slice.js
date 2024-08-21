import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    MoviesLoading: false,
    Movies: [],
    PageDetails: "",
    MoviesError: "",

    addMovieLoading: false,
    addMovieSuccess: "",
    addMovieError: "",

    oneMovieLoading: false,
    oneMovie: {},
    oneMovieSuccess: "",
    oneMovieError: "",

    updateMovieLoading: false,
    updateMovieSuccess: "",
    updateMovieError: "",

    delMovieLoading: false,
    delMovieSuccess: "",
    delMovieError: "",
  },
  reducers: {
    getMoviesRequest: (state) => {
      state.MoviesLoading = true;
    },
    getMoviesSuccess: (state, action) => {
      state.MoviesLoading = false;
      state.Movies = action.payload.data;
      state.PageDetails = action.payload.pagination;
    },
    getMoviesError: (state, action) => {
      state.MoviesLoading = false;
      state.MoviesError = action.payload;
    },

    addMovieRequest: (state) => {
      state.addMovieLoading = true;
      state.addMovieSuccess = "";
      state.addMovieError = "";
    },
    addMoviesSuccess: (state, action) => {
      state.addMovieLoading = false;
      state.addMovieSuccess = action.payload;
    },
    addMoviesError: (state, action) => {
      state.addMovieLoading = false;
      state.addMovieError = action.payload;
    },

    oneMovieRequest: (state) => {
      state.oneMovieLoading = false;
      state.oneMovie = {};
      state.oneMovieSuccess = "";
      state.oneMovieError = "";
    },
    oneMovieSuccess: (state, action) => {
      state.oneMovieLoading = false;
      state.oneMovieSuccess = action.payload.message;
      state.oneMovie = action.payload.data;
    },
    oneMovieError: (state, action) => {
      state.oneMovieLoading = false;
      state.oneMovieError = action.payload;
    },

    updateMovieRequest: (state) => {
      state.updateMovieLoading = true;
      state.updateMovieSuccess = "";
      state.updateMovieError = "";
    },
    updateMoviesSuccess: (state, action) => {
      state.updateMovieLoading = false;
      state.updateMovieSuccess = action.payload;
    },
    updateMoviesError: (state, action) => {
      state.updateMovieLoading = false;
      state.updateMovieError = action.payload;
    },

    deleteMovieRequest: (state) => {
      state.delMovieLoading = true;
      state.delMovieSuccess = "";
      state.delMovieError = "";
    },
    deleteMoviesSuccess: (state, action) => {
      state.delMovieLoading = false;
      state.delMovieSuccess = action.payload;
    },
    deleteMoviesError: (state, action) => {
      state.delMovieLoading = false;
      state.delMovieError = action.payload;
    },
    resetState: (state, action) => {
      state.updateMovieLoading = false;
      state.updateMovieSuccess = "";
      state.updateMovieError = "";
      state.addMovieLoading = false;
      state.addMovieSuccess = "";
      state.addMovieError = "";
      state.oneMovie = {};
    },
  },
});

export const {
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesError,
  deleteMovieRequest,
  deleteMoviesSuccess,
  deleteMoviesError,
  updateMovieRequest,
  updateMoviesSuccess,
  updateMoviesError,
  addMovieRequest,
  addMoviesSuccess,
  addMoviesError,
  oneMovieRequest,
  oneMovieSuccess,
  oneMovieError,
  resetState,
} = movieSlice.actions;
export default movieSlice.reducer;

import { get, post, postFormData, put, putFormData } from "../AxiosConfig";

const URI = "/movie";

const fetchMovies = (data) => {
  const URL = `${URI}/list`;
  return post(URL, data);
};

const addMovie = (data) => {
  const URL = `${URI}/create`;
  return postFormData(URL, data);
};

const updateMovie = (id, data) => {
  const URL = `${URI}/update/${id}`;
  return putFormData(URL, data);
};

const getOneMovie = (id) => {
  const URL = `${URI}/${id}`;
  return get(URL);
};

const deleteMovie = (id) => {
  const URL = `${URI}/delete/${id}`;
  return post(URL);
};

export const movieAPIs = {
  fetchMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  getOneMovie,
};

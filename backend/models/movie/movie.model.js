const mongoose = require("mongoose");
const { MOVIES } = require("../../constants/models.enum.constants");

const { Schema } = mongoose;

var schema = Schema({
  name: { type: String, required: true, unique: true },
  publishing_year: { type: String, required: true },
  cover_pic: { type: String, required: true },
  is_deleted: {
    type: Boolean,
    default: false,
  },
  created_by: {
    type: String,
    default: null,
  },
  updated_by: {
    type: String,
    default: null,
  },
  deleted_by: {
    type: String,
    default: null,
  },
  created_date: {
    type: Date,
    default: new Date(),
  },
});

const Movie = mongoose.model(MOVIES, schema);
module.exports = Movie;

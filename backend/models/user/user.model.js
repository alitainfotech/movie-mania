const mongoose = require("mongoose");
const { USER } = require("../../constants/models.enum.constants");

const { Schema } = mongoose;

var schema = Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  token: { type: String, max: 500, default: null, required: false },
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
  updated_date: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model(USER, schema);
module.exports = User;

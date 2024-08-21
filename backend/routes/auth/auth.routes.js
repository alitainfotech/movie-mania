var express = require("express");
var authRouter = express.Router();

const { validateApi } = require("../../middlewares/validator");
const {
  loginValidationRules,
} = require("../../validation_rules/auth.validation");

const { auth, authPermissions } = require("../../middlewares/auth.guard");
const { login, logout } = require("../../controllers/auth/auth.controller");

/* LOGIN API */
authRouter.post("/login", loginValidationRules(), validateApi, login);

/* LOGOUT API */
authRouter.get("/logout", auth, logout);

module.exports = { authRouter };

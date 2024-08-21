const { checkSchema } = require("express-validator");
const { AUTH_MESSAGES } = require("../controller-messages/auth.messages");

const loginValidationRules = () => {
  return checkSchema({
    email: {
      exists: {
        errorMessage: AUTH_MESSAGES.EMAIL_ERROR_MISSING,
      },
      notEmpty: {
        errorMessage: AUTH_MESSAGES.EMAIL_ERROR_EMPTY,
      },
      isEmail: {
        errorMessage: AUTH_MESSAGES.EMAIL_ERROR_INVALID,
      },
    },

    password: {
      exists: {
        errorMessage: AUTH_MESSAGES.PASSWORD_ERROR_MISSING,
      },
      notEmpty: {
        errorMessage: AUTH_MESSAGES.PASSWORD_ERROR_EMPTY,
      },
    },
  });
};

module.exports = {
  loginValidationRules,
};

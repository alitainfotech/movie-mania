const AUTH_MESSAGES = {
  LOGIN_SUCCESSFUL: "Log-in successful.",
  LOGIN_FAILED: "Log-in failed.",
  LOGOUT_SUCCESSFUL: "Log-out successful.",
  LOGOUT_FAILED: "Log-out failed.",
  USER_NOT_FOUND: "User does not exists.",
  USER_EXISTS: "User already exists.",
  USER_ALREADY_LOGGEDIN: "User is already logged-in on some device.",
  LOGIN_UN_SUCCESSFUL_WITHOUT_PASSWORD:
    "Please set your password before logging in.",

  REGISTER_SUCCESSFUL: "Register successful.",
  REGISTER_FAILED: "Sign-up failed.",

  FORGOT_PASSWORD_FAILED: "Forgot password failed.",

  INVALID_CREDENTIALS: "Invalid Credentials.",
  CURRENT_PASSWORD_INVALID: "Invalid currunt password",
  INVITE_SENT: "Invitation sent successfully.",
  EMAIL_CODE_SENT: "Invite code has been sent to you via mail please accept.",
  EMAIL_CODE_NOT_SENT: "Issue sending invitation.",
  URL_CORRECT: "Your Link to reset password is valid.",
  URL_EXPIRED: "Your Link to reset password is expired.",
  LINK_INCORRECT: "Your Link to reset password is incorrect.",
  INVITE_URL_CORRECT: "Your Link to set password is valid.",

  INVITE_URL_EXPIRED: "Your invitation code is expired.",
  INVITE_LINK_INCORRECT: "Your invitation code is incorrect.",
  EMAIL_SENT:
    "Check your mail box the link has been shared to change password.",

  PASSWORD_RESET_SUCCESSFULLY: "Reset password successful.",
  PASSWORD_RESET_UN_SUCCESSFULLY: "Reset password failed.",
  PASSWORD_CHANGE_SUCCESSFULLY: "Change password successful.",
  PASSWORD_CHANGE_UN_SUCCESSFULLY: "Change password failed.",
  CURRENT_PASSWORD_INVALID: "Current password is invalid",
  INITIAL_PASSWORD_SETUP_SUCCESS: "Password setup successful.",
  INITIAL_PASSWORD_SETUP_ERROR: "Password setup un-successful.",

  EDIT_PROFILE_SUCCESSFUL: "Profile edited successfully.",
  EDIT_PROFILE_FAILED: "Edit profile failed.",

  GET_PROFILE_SUCCESSFUL: "Fetch profile successfully.",
  GET_PROFILE_FAILED: "Fetching user profile failed.",

  RESPONSE_SAVED: "Thank you your response have been saved",
  RESPONSE_NOT_SAVED: "Trouble saving your response",

  EMAIL_ERROR_MISSING: "Email is missing.",
  EMAIL_ERROR_EMPTY: "Email is empty.",
  EMAIL_ERROR_INVALID: "Invalid email address.",
  EMAIL_UNIQUE: "Email already in use.",

  NAME_MISSING: "Name is missing",
  NAME_EMPTY: "Name is empty",

  PASSWORD_ERROR_MISSING: "Password is missing",
  PASSWORD_ERROR_EMPTY: "Password is empty",

  ROLE_ERROR_MISSING: "Role is missing",
  ROLE_ERROR_EMPTY: "Role is empty",
  ROLE_NOT_FOUND: "Role doesn't exists",

  DEPARTMENT_ERROR_MISSING: "Department is missing",
  DEPARTMENT_ERROR_EMPTY: "Department is empty",
  DEPARTMENT_NOT_FOUND: "Department doesn't exists",

  TOKEN_ERROR_MISSING: "Token is missing",
  TOKEN_ERROR_EMPTY: "Token is empty",

  NEW_PASSWORD_ERROR_MISSING: "New Password is missing",
  NEW_PASSWORD_ERROR_EMPTY: "New Password is empty",

  CURRENT_PASSWORD_ERROR_MISSING: "Current Password is missing",
  CURRENT_PASSWORD_ERROR_EMPTY: "Current Password is empty",
};

module.exports = {
  AUTH_MESSAGES,
};

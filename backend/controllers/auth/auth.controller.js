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

/* LOGIN // METHOD: POST // PAYLOAD: {email, password} */
const login = async (req, res) => {
  try {
    let { email, password } = req.body; //Coming from formData
    let existingUser = await User.findOne({
      email: { $regex: email, $options: "i" },
    });
    if (!existingUser) {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_ERROR,
        message: null,
        data: null,
        error: AUTH_MESSAGES.INVALID_CREDENTIALS,
      };
      return res.status(RESPONSE_STATUS_CODE_OK).json(responsePayload);
    }

    const isPasswordCorrect = await comparePasswordHash(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_ERROR,
        message: null,
        data: null,
        error: AUTH_MESSAGES.INVALID_CREDENTIALS,
      };
      return res.status(RESPONSE_STATUS_CODE_OK).json(responsePayload);
    }

    //If crednetials are valid, create a token for the user
    const token = authService.generateToken({
      email: existingUser.email,
      id: existingUser._id,
      status: existingUser.status,
    });
    let updateObj = { token: token };

    let newRes = await User.findOneAndUpdate(
      { email: existingUser.email },
      updateObj,
      { new: true }
    );

    newRes = JSON.parse(JSON.stringify(newRes));

    delete newRes.password, delete newRes.token;

    const responsePayload = {
      status: RESPONSE_PAYLOAD_STATUS_SUCCESS,
      message: AUTH_MESSAGES.LOGIN_SUCCESSFUL,
      data: { token: token, result: newRes },
      error: null,
    };
    return res.status(RESPONSE_STATUS_CODE_OK).json(responsePayload);
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

/* LOGOUT GET API with Authorization // METHOD: GET */
const logout = async (req, res) => {
  try {
    const { _id } = req[AUTH_USER_DETAILS];
    let updateObj = { token: null };
    const loggedOut = await User.findByIdAndUpdate(_id, updateObj, {
      new: true,
    });
    if (loggedOut) {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_SUCCESS,
        message: AUTH_MESSAGES.LOGOUT_SUCCESSFUL,
        data: null,
        error: null,
      };
      return res.status(RESPONSE_STATUS_CODE_OK).json(responsePayload);
    } else {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_ERROR,
        message: null,
        data: null,
        error: AUTH_MESSAGES.LOGOUT_FAILED,
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

module.exports = {
  login,
  logout,
};

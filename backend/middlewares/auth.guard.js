const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const {
  RESPONSE_PAYLOAD_STATUS_ERROR,
  RESPONSE_STATUS_CODE_AUTHORIZATION_ERROR,
  RESPONSE_STATUS_MESSAGE_AUTHORIZATION_ERROR,
  RESPONSE_STATUS_MESSAGE_PERMISSION_AUTHORIZATION_ERROR,
  AUTH_USER_DETAILS,
  RESPONSE_STATUS_CODE_PERMISSION_AUTHORIZATION_ERROR,
} = require("../constants/global.constants");
const User = require("../models/user/user.model");

dotenv.config();

/** Authorization middleware to check */
const auth = async (req, res, next) => {
  try {
    if (req.headers && req.headers.authorization) {
      const authArray = req.headers.authorization.split(" ");
      if (authArray && authArray.length > 0 && authArray[1]) {
        const token = authArray[1];
        const secret_key = process.env.SECRET_KEY;
        const decodedToken = jwt.verify(token, secret_key);

        let findObj = {
          _id: decodedToken.id,
          email: decodedToken.email,
        };
        if (req.headers["ttx_login_type"] === "tracker") {
          findObj = { ...findObj, tracker_token: token };
        } else {
          findObj = { ...findObj, token: token };
        }
        const userObj = await User.findOne(findObj);
        if (userObj) {
          const user = userObj.toJSON();
          req[AUTH_USER_DETAILS] = user;
          return next();
        } else {
          const responsePayload = {
            status: RESPONSE_PAYLOAD_STATUS_ERROR,
            message: null,
            data: null,
            error: RESPONSE_STATUS_MESSAGE_AUTHORIZATION_ERROR,
          };
          return res
            .status(RESPONSE_STATUS_CODE_AUTHORIZATION_ERROR)
            .json(responsePayload);
        }
      } else {
        const responsePayload = {
          status: RESPONSE_PAYLOAD_STATUS_ERROR,
          message: null,
          data: null,
          error: RESPONSE_STATUS_MESSAGE_AUTHORIZATION_ERROR,
        };
        return res
          .status(RESPONSE_STATUS_CODE_AUTHORIZATION_ERROR)
          .json(responsePayload);
      }
    } else {
      const responsePayload = {
        status: RESPONSE_PAYLOAD_STATUS_ERROR,
        message: null,
        data: null,
        error: RESPONSE_STATUS_MESSAGE_AUTHORIZATION_ERROR,
      };
      return res
        .status(RESPONSE_STATUS_CODE_AUTHORIZATION_ERROR)
        .json(responsePayload);
    }
  } catch (err) {
    const responsePayload = {
      status: RESPONSE_PAYLOAD_STATUS_ERROR,
      message: null,
      data: null,
      error: RESPONSE_STATUS_MESSAGE_AUTHORIZATION_ERROR,
    };
    return res
      .status(RESPONSE_STATUS_CODE_AUTHORIZATION_ERROR)
      .json(responsePayload);
  }
};

module.exports = {
  auth,
};

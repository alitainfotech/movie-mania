const { passwordHash } = require("./fn");
const User = require("../models/user/user.model");

require("dotenv").config();


const dataEntry = async (req, res) => {
  try {
    let count = await User.countDocuments();
    if (count == 0) {
      const hashedPassword = await passwordHash(
        process.env.REGISTERED_PASSWORD
      );
      return await User.create({
        email: process.env.REGISTERED_EMAIL,
        password: hashedPassword,
      });
    }
  } catch (error) {
    return new Error(error);
  }
};

module.exports = { dataEntry };

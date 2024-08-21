const bcrypt = require("bcryptjs");
const saltRounds = process.env.SALT_ROUNDS;

const passwordHash = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, parseInt(saltRounds), (err, hash) => {
      if (err) {
        return reject(err);
      }
      return resolve(hash);
    });
  });
};

const comparePasswordHash = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .compare(password, hash)
      .then((isValid) => {
        if (isValid) return resolve(1);
        else return resolve(0);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

module.exports = {
  passwordHash,
  comparePasswordHash,
};

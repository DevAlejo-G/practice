const { hash, compare } = require("bcryptjs");

/**
 * @param {string} pass
 * @returns
 */
const encrypt = async (pass) => {
  const passHash = hash(pass, 8);
  return passHash;
};

/**
 * @param {string} pass
 * @param {string} passHash
 * @returns
 */
const verified = async (pass, passHash) => {
  const checkPass = compare(pass, passHash);
  return checkPass;
};

module.exports = { encrypt, verified };

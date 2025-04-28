const { UsersModel } = require("../models/index.js");
const { encrypt, verified } = require("../utils/bcrypt.handle.js");
const { generateToken } = require("../utils/jwt.handle.js");

const registerNewUser = async ({ username, email, password, role }) => {
  const checkIs = await UsersModel.findOne({ email });
  if (checkIs) return { error: "ALREADY_USER" };

  const passHash = await encrypt(password);
  const registerNewUser = await UsersModel.create({
    username,
    email,
    password: passHash,
    role,
  });
  return registerNewUser;
};

const registerLogin = async ({ email, password }) => {
  const checkIs = await UsersModel.findOne({ email });
  if (!checkIs) return { error: "USER_NOT_FOUND" };

  const passHash = checkIs.password;
  const isCorrect = await verified(password, passHash);
  if (!isCorrect) return { error: "PASSWORD_INCORRECT" };

  const token = generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };
  return data;
};

const updateInfoUser = async ({ username, email, password, role }, id) => {
  const checkIs = await UsersModel.findOne({ username: id, email: email });
  if (!checkIs) return { error: "USER_NOT_FOUND" };

  const passHash = await encrypt(password);
  const registerNewUser = await UsersModel.updateOne({
    username,
    email,
    password: passHash,
    role,
  });
  return registerNewUser;
};

module.exports = { registerNewUser, registerLogin, updateInfoUser };

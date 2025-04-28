const { registerNewUser, registerLogin } = require("../services/auth.js");

const registerCtrl = async ({ body } = req, res) => {
  const responseUser = await registerNewUser(body);
  if (responseUser.error) {
    return res.status(403).send({ error: responseUser.error });
  }
  res.send(responseUser);
};

const loginCtrl = async ({ body } = req, res) => {
  const { email, password } = body;
  const responseUser = await registerLogin({ email, password });
  if (responseUser.error) {
    const statusCode = responseUser.error === "PASSWORD_INCORRECT" ? 403 : 404;
    return res.status(statusCode).send({ error: responseUser.error });
  }
  res.send(responseUser);
};


module.exports = { registerCtrl, loginCtrl };

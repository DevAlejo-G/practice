const { UsersModel } = require("../models/index.js");
const { handleHttpError } = require("../utils/error.handle.js");
const { updateInfoUser } = require('../services/auth.js')

const verifyUser = async (id) => await UsersModel.findOne({ username: id });

const getUsers = async (req, res) => {
  try {
    const users = await UsersModel.find();
    if (users.length === 0) {
      return res.status(204).send({ msj: "No data" });
    }

    res.send(users);
  } catch (error) {
    handleHttpError(res, error);
  }
};

const getUser = async ({ params } = req, res) => {
  try {
    const { id } = params;

    const user = await verifyUser(id);
    if (!user) return res.status(404).send({ msj: "NotFound User" });

    res.send(user);
  } catch (error) {
    handleHttpError(res, error);
  }
};

const updateUser = async ({ body, params } = req, res) => {
  try {
    const { id } = params;

    const user = await verifyUser(id);
    if (!user) return res.status(404).send({ msj: "NotFound User" });

    const responseUser = await updateInfoUser(body, id);
    if(responseUser.error){
      return res.status(404).send({error: responseUser.error})
    }
    res.send({msj: "Modified User"})
  } catch (error) {
    handleHttpError(res, error);
  }
};

const deleteUser = async ({ params } = req, res) => {
  try {
    const { id } = params;
    const user = await verifyUser(id);

    if (!user) return res.status(404).send({ msj: "NotFound User" });

    await UsersModel.deleteOne({ username: id });
    res.send({ msj: "Deleted User" });
  } catch (error) {
    handleHttpError(res, error);
  }
};

module.exports = { getUsers, getUser, updateUser, deleteUser };

const { TasksModel } = require("../models/index.js");
const { handleHttpError } = require("../utils/error.handle.js");
const { isObjectId } = require("../utils/objectId.handle.js");

const verifyTask = async (id) => await TasksModel.findOne({ _id: id });

const getTasks = async (req, res) => {
  try {
    const tasks = await TasksModel.find();
    if (tasks.length === 0) {
      return res.status(204).send({ msj: "No data" });
    }

    res.send(tasks);
  } catch (error) {
    handleHttpError(res, error);
  }
};

const getTask = async ({ params } = req, res) => {
  try {
    const { id } = params;
    if (!isObjectId(id)) {
      return res.status(400).send({ msj: "Invalid ObjectId" });
    }

    const task = await verifyTask(id);
    if (!task) return res.status(404).send({ msj: "NotFound Task" });

    res.send(task);
  } catch (error) {
    handleHttpError(res, error);
  }
};

const createTask = async ({ body } = req, res) => {
  try {
    const task = await TasksModel.create(body);
    res.send(task);
  } catch (error) {
    handleHttpError(res, error);
  }
};

const updateTask = async ({ body, params } = req, res) => {
  try {
    const { id } = params;
    if (!isObjectId(id)) {
      return res.status(400).send({ msj: "Invalid ObjectId" });
    }

    const task = await verifyTask(id);
    if (!task) return res.status(404).send({ msj: "NotFound Task" });

    await TasksModel.updateOne({ _id: id }, { $set: body });
    res.send({ msj: "Modified Task" });
  } catch (error) {
    handleHttpError(res, error);
  }
};

const deleteTask = async ({ params } = req, res) => {
  try {
    const { id } = params;

    if (!isObjectId(id)) {
      return res.status(400).send({ msj: "Invalid ObjectId" });
    }

    const task = await verifyTask(id);
    if (!task) return res.status(404).send({ mjs: "NotFound Task" });

    await TasksModel.deleteOne({ _id: id });
    res.send({ msj: "Deleted Task" });
  } catch (error) {
    handleHttpError(res, error);
  }
};

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };

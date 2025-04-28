const { ProjectsModel } = require("../models/index.js");
const { handleHttpError } = require("../utils/error.handle.js");
const { isObjectId } = require("../utils/objectId.handle.js");

const verifyProject = async (id) => ProjectsModel.findOne({ _id: id });

const getProjects = async (req, res) => {
  try {
    const projects = await ProjectsModel.find();
    if (projects.length === 0) {
      return res.status(204).send({ msj: "No data" });
    }

    res.send(projects);
  } catch (error) {
    handleHttpError(res, error);
  }
};

const getProject = async ({ params } = req, res) => {
  try {
    const { id } = params;
    if (!isObjectId(id)) {
      return res.status(400).send({ msj: "Invalid ObjectId" });
    }

    const project = await verifyProject(id);
    if (!project) return res.status(404).send({ msj: "NotFound Project" });

    res.send(project);
  } catch (error) {
    handleHttpError(res, error);
  }
};

const createProject = async ({ body } = req, res) => {
  try {
    const project = await ProjectsModel.create(body);
    res.send(project);
  } catch (error) {
    handleHttpError(res, error);
  }
};

const updateProject = async ({ body, params } = req, res) => {
  try {
    const { id } = params;
    if (!isObjectId(id)) {
      return res.status(400).send({ msj: "Invalid ObjectId" });
    }

    const project = await verifyProject(id);
    if (!project) return res.status(404).send({ msj: "NotFound Project" });

    await ProjectsModel.updateOne({ _id: id }, { $set: body });
    res.send({ msj: "Modified Project" });
  } catch (error) {
    handleHttpError(res, error);
  }
};

const deleteProject = async ({ params } = req, res) => {
  try {
    const { id } = params;
    if (!isObjectId(id)) {
      return res.status(400).send({ msj: "Invalid ObjectId" });
    }

    const project = await verifyProject(id);
    if (!project) return res.status(404).send({ msj: "NotFound Project" });

    await ProjectsModel.deleteOne({ _id: id });
    res.send({ msj: "Deleted Project" });
  } catch (error) {
    handleHttpError(res, error);
  }
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};

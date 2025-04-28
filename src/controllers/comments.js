const { CommentsModel } = require("../models/index.js");
const { handleHttpError } = require("../utils/error.handle.js");
const { isObjectId } = require("../utils/objectId.handle.js");

const verifyComment = async (id) => await CommentsModel.findOne({ _id: id });

const getComments = async (req, res) => {
  try {
    const comments = await CommentsModel.find();
    if (comments.length === 0) {
      return res.status(204).send({ msj: "No data" });
    }

    res.send(comments);
  } catch (error) {
    handleHttpError(res, error);
  }
};

const getComment = async ({ params } = req, res) => {
  try {
    const { id } = params;
    if (!isObjectId(id)) {
      return res.status(400).send({ msj: "Invalid ObjectId" });
    }

    const comment = await verifyComment(id);
    if (!comment) return res.status(404).send({ msj: "NotFound Comment" });

    res.send(comment);
  } catch (error) {
    handleHttpError(res, error);
  }
};

const createComment = async ({ body } = req, res) => {
  try {
    const comment = await CommentsModel.create(body);
    res.send(comment);
  } catch (error) {
    handleHttpError(res, error);
  }
};

const updateComment = async ({ body, params } = req, res) => {
  try {
    const { id } = params;
    if (!isObjectId(id)) {
      return res.status(400).send({ msj: "Invalid ObjectId" });
    }

    const comment = await verifyComment(id);
    if (!comment) return res.status(404).send({ msj: "NotFound Comment" });

    await CommentsModel.updateOne({ _id: id }, { $set: body });
    res.send({ msj: "Modified Comment" });
  } catch (error) {
    handleHttpError(res, error);
  }
};

const deleteComment = async ({ params } = req, res) => {
  try {
    const { id } = params;
    if (!isObjectId(id)) {
      return res.status(400).send({ msj: "Invalid ObjectId" });
    }

    const comment = await verifyComment(id);
    if (!comment) return res.status(404).send({ msj: "NotFound Comment" });

    await CommentsModel.deleteOne({ _id: id });
    res.send({ msj: "Deleted Comment" });
  } catch (error) {
    handleHttpError(res, error);
  }
};

module.exports = {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};

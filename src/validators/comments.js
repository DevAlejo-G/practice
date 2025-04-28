const { check } = require("express-validator");
const { validateResult } = require("../utils/validator.handle.js");

const validateCreateObjectData = [
  check("taskId")
    .notEmpty()
    .withMessage("is required")
    .isMongoId()
    .withMessage("must be type MongoID"),
  check("author")
    .notEmpty()
    .withMessage("is required")
    .isMongoId()
    .withMessage("must be type MongoID"),
  check("comment")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateUpdateObjectData = [
  check("taskId")
    .notEmpty()
    .withMessage("is required")
    .isMongoId()
    .withMessage("must be type MongoID"),
  check("author")
    .notEmpty()
    .withMessage("is required")
    .isMongoId()
    .withMessage("must be type MongoID"),
  check("comment")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreateObjectData, validateUpdateObjectData };

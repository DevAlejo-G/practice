const { check } = require("express-validator");
const { validateResult } = require("../utils/validator.handle.js");

const validateCreateObjectData = [
  check("name")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("description")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("owner")
    .notEmpty()
    .withMessage("is required")
    .isMongoId()
    .withMessage("must be type MongoID"),
  check("members")
    .notEmpty()
    .withMessage("is required")
    .isArray()
    .withMessage("must be type Array"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateUpdateObjectData = [
  check("name")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("description")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("owner")
    .notEmpty()
    .withMessage("is required")
    .isMongoId()
    .withMessage("must be type MongoID"),
  check("members")
    .notEmpty()
    .withMessage("is required")
    .isArray()
    .withMessage("must be type Array"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreateObjectData, validateUpdateObjectData };

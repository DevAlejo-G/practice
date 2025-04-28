const { check } = require("express-validator");
const { validateResult } = require("../utils/validator.handle.js");

const validateCreateObjectData = [
  check("title")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("description")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("status")
    .notEmpty()
    .withMessage("is required")
    .isIn(["pendiente", "en progreso", "completada"])
    .withMessage("'pendiente' or 'en progreso' or 'completada'"),
  check("priority")
    .notEmpty()
    .withMessage("is required")
    .isIn(["alta", "media", "baja"])
    .withMessage("'alta' or 'media' or 'baja'"),
  check("assignedTo")
    .notEmpty()
    .withMessage("is required")
    .isMongoId()
    .withMessage("must be type MongoID"),
  check("createdBy")
    .notEmpty()
    .withMessage("is required")
    .isMongoId()
    .withMessage("must be type MongoID"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateUpdateObjectData = [
  check("title")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("description")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("status")
    .notEmpty()
    .withMessage("is required")
    .isIn(["pendiente", "en progreso", "completada"])
    .withMessage("'pendiente' or 'en progreso' or 'completada'"),
  check("priority")
    .notEmpty()
    .withMessage("is required")
    .isIn(["alta", "media", "baja"])
    .withMessage("'alta' or 'media' or 'baja'"),
  check("assignedTo")
    .notEmpty()
    .withMessage("is required")
    .isMongoId()
    .withMessage("must be type MongoID"),
  check("createdBy")
    .notEmpty()
    .withMessage("is required")
    .isMongoId()
    .withMessage("must be type MongoID"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreateObjectData, validateUpdateObjectData };

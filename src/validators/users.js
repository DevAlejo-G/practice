const { check } = require("express-validator");
const { validateResult } = require("../utils/validator.handle.js");

const validateCreateObjectData = [
  check("username")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("email")
    .notEmpty()
    .withMessage("is required")
    .isEmail()
    .withMessage("must be type Email"),
  check("password")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("role")
    .notEmpty()
    .withMessage("is required")
    .isIn(["admin", "user"])
    .withMessage("'admin' or 'user'"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateUpdateObjectData = [
  check("username")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("email")
    .notEmpty()
    .withMessage("is required")
    .isEmail()
    .withMessage("must be type Email"),
  check("password")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("role")
    .notEmpty()
    .withMessage("is required")
    .isIn(["admin", "user"])
    .withMessage("'admin' or 'user'"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateLoginObjectData = [
  check("email")
    .notEmpty()
    .withMessage("is required")
    .isEmail()
    .withMessage("must be type Email"),
  check("password")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateCreateObjectData,
  validateUpdateObjectData,
  validateLoginObjectData,
};

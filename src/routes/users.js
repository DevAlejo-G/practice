const { Router } = require("express");
const router = Router();
const { registerCtrl, loginCtrl } = require("../controllers/auth.js");
const { getUsers, getUser, updateUser, deleteUser } = require('../controllers/users.js')
const {
  validateCreateObjectData,
  validateUpdateObjectData,
  validateLoginObjectData,
} = require("../validators/users.js");

router.post("/register", validateCreateObjectData, registerCtrl);
router.post("/login", validateLoginObjectData, loginCtrl);

router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", validateUpdateObjectData, updateUser);
router.delete("/:id", deleteUser);


module.exports = router;

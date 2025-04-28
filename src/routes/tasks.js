const { Router } = require("express");
const router = Router();
const { getTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/tasks.js')
const { validateCreateObjectData, validateUpdateObjectData } = require('../validators/tasks.js')

router.get('/', getTasks);
router.get('/:id', getTask);
router.post('/', validateCreateObjectData, createTask);
router.put('/:id', validateUpdateObjectData, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;

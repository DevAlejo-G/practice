const { Router } = require("express");
const router = Router();
const { getProjects, getProject, createProject, updateProject, deleteProject } = require('../controllers/projects.js')
const { validateCreateObjectData, validateUpdateObjectData } = require('../validators/projects.js')

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', validateCreateObjectData, createProject);
router.put('/:id', validateUpdateObjectData, updateProject);
router.delete('/:id', deleteProject);


module.exports = router;

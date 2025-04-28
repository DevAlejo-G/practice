const { Router } = require("express");
const router = Router();
const { getComments, getComment, createComment, updateComment, deleteComment } = require('../controllers/comments.js')
const { validateCreateObjectData, validateUpdateObjectData } = require('../validators/comments.js')

router.get('/', getComments);
router.get('/:id', getComment);
router.post('/', validateCreateObjectData, createComment);
router.put('/:id',validateUpdateObjectData, updateComment);
router.delete('/:id', deleteComment);


module.exports = router;

const router = require('express').Router();

const { getAllCategories, addNewCategory, editCategoryName, deleteCategory } = require('../controllers');
const { auth, admin, asyncMiddleWare } = require('../middlewares');

router.get('/', asyncMiddleWare(getAllCategories));
router.use(asyncMiddleWare(auth), asyncMiddleWare(admin));

router.post('/', asyncMiddleWare(addNewCategory));
router.delete('/', asyncMiddleWare(deleteCategory));
router.patch('/:id', asyncMiddleWare(editCategoryName));

module.exports = router;
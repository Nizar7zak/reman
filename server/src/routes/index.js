const router = require('express').Router();

const productsRouter = require('./productsRouter');

const { asyncMiddleWare, serverError, auth, admin } = require('../middlewares');

const {
  login,
  signUp,
  addToCart,
  getCartData,
  getAllCategories,
  addNewCategory,
  deleteCategory,
  editCategoryName,
} = require('../controllers');

router.get('/checkauth', asyncMiddleWare(auth), asyncMiddleWare(admin));

router.use('/products', productsRouter)


router.get('/cart', asyncMiddleWare(auth), asyncMiddleWare(getCartData));
router.post('/cart', asyncMiddleWare(auth), asyncMiddleWare(addToCart));

router.get('/categories', asyncMiddleWare(getAllCategories));
router.post(
  '/categories',
  asyncMiddleWare(auth),
  asyncMiddleWare(admin),
  asyncMiddleWare(addNewCategory)
);
router.patch('/categories/:id',
asyncMiddleWare(auth),
asyncMiddleWare(admin),
asyncMiddleWare(editCategoryName)
);
router.delete(
  '/categories',
  asyncMiddleWare(auth),
  asyncMiddleWare(admin),
  asyncMiddleWare(deleteCategory)
);

router.post('/login', asyncMiddleWare(login));
router.post('/signup', asyncMiddleWare(signUp));

router.use(serverError);

module.exports = router;

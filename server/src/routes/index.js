const router = require('express').Router();

const { asyncMiddleWare, serverError, auth, admin } = require('../middlewares');

const {
  login,
  signUp,
  getProducts,
  addProduct,
  getProductById,
  editProduct,
  deleteProductById,
  addToCart,
  getCartData,
  getAllCategories,
  addNewCategory,
  deleteCategory,
  editCategoryName,
  editProductRate,
} = require('../controllers');

router.get('/checkauth', asyncMiddleWare(auth), asyncMiddleWare(admin));

router.get('/products', asyncMiddleWare(getProducts));
router.get('/products/:id', asyncMiddleWare(getProductById));
router.post(
  '/products',
  asyncMiddleWare(auth),
  asyncMiddleWare(admin),
  asyncMiddleWare(addProduct)
);
router.put(
  '/products/edit',
  asyncMiddleWare(auth),
  asyncMiddleWare(admin),
  asyncMiddleWare(editProduct)
);
router.patch('/products/rate', asyncMiddleWare(auth), asyncMiddleWare(editProductRate))
router.delete(
  '/products/:id',
  asyncMiddleWare(auth),
  asyncMiddleWare(admin),
  asyncMiddleWare(deleteProductById)
);

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

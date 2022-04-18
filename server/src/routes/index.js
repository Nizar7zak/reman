const router = require('express').Router();

const {
  asyncMiddleWare, serverError, auth, admin,
} = require('../middlewares');

const {
  login, signUp, getProducts, addProduct, getProductById, editProduct, deleteProductById, addToCart,
} = require('../controllers');

router.get('/checkauth', asyncMiddleWare(auth), asyncMiddleWare(admin));

router.get('/products', asyncMiddleWare(getProducts));
router.get('/products/:id', asyncMiddleWare(getProductById));
router.post('/products', asyncMiddleWare(auth), asyncMiddleWare(admin), asyncMiddleWare(addProduct));
router.patch('/products/edit', asyncMiddleWare(auth), asyncMiddleWare(admin), asyncMiddleWare(editProduct));
router.delete('/products/:id', asyncMiddleWare(auth), asyncMiddleWare(admin), asyncMiddleWare(deleteProductById))

router.post('/cart', asyncMiddleWare(auth), asyncMiddleWare(addToCart));

router.post('/login', asyncMiddleWare(login));
router.post('/signup', asyncMiddleWare(signUp));

router.use(serverError);

module.exports = router;

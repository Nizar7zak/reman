const router = require('express').Router();

const {
  asyncMiddleWare, serverError, auth, admin,
} = require('../middlewares');

const { login, signUp, getProducts } = require('../controllers');

router.get('/checkauth', asyncMiddleWare(auth), asyncMiddleWare(admin));
router.get('/products', asyncMiddleWare(getProducts));

router.post('/login', asyncMiddleWare(login));
router.post('/signup', asyncMiddleWare(signUp));

router.use(serverError);

module.exports = router;

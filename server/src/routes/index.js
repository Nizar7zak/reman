const router = require('express').Router();

const { asyncMiddleWare, serverError, auth, admin } = require('../middlewares');

const productsRouter = require('./productsRouter');
const cartRouter = require('./cartRouter');
const categoriesRouter = require('./categoriesRouter');

const { login, signUp } = require('../controllers');

router.get('/checkauth', asyncMiddleWare(auth), asyncMiddleWare(admin));

router.use('/products', productsRouter);
router.use('/cart', cartRouter);
router.use('/categories', categoriesRouter)

router.post('/login', asyncMiddleWare(login));
router.post('/signup', asyncMiddleWare(signUp));

router.use(serverError);

module.exports = router;

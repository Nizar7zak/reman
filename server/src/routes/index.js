const router = require('express').Router();

const { asyncMiddleWare, serverError, clientError } = require('../middlewares');

const productsRouter = require('./productsRouter');
const cartRouter = require('./cartRouter');
const categoriesRouter = require('./categoriesRouter');

const { login, signUp } = require('../controllers');

router.post('/login', asyncMiddleWare(login));
router.post('/signup', asyncMiddleWare(signUp));

router.use('/products', productsRouter);
router.use('/cart', cartRouter);
router.use('/categories', categoriesRouter);

router.use(clientError);
router.use(serverError);

module.exports = router;

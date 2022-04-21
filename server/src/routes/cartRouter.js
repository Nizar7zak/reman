const router = require('express').Router();

const { getCartData, addToCart } = require('../controllers');

const { auth, asyncMiddleWare } = require('../middlewares');

router.use(asyncMiddleWare(auth));
router
  .route('/')
  .get(asyncMiddleWare(getCartData))
  .post(asyncMiddleWare(addToCart));

module.exports = router;

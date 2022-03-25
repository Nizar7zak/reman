const router = require('express').Router();

const {
  asyncMiddleWare, serverError,
} = require('../middlewares');

const login = require('./login');
const signUp = require('./signup');

router.post('/login', asyncMiddleWare(login));
router.post('/signup', asyncMiddleWare(signUp));

router.use(serverError);

module.exports = router;

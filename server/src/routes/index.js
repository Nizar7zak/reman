const router = require('express').Router();

const {
  asyncMiddleWare, serverError, auth,
} = require('../middlewares');

const login = require('./login');
const signUp = require('./signup');

router.get('/checkAuth', asyncMiddleWare(auth));
router.post('/login', asyncMiddleWare(login));
router.post('/signup', asyncMiddleWare(signUp));

router.use(serverError);

module.exports = router;

const router = require('express').Router();

const {
  asyncMiddleWare, serverError, auth, admin,
} = require('../middlewares');

const login = require('./login');
const signUp = require('./signup');

router.get('/checkauth', asyncMiddleWare(auth), asyncMiddleWare(admin));
router.post('/login', asyncMiddleWare(login));
router.post('/signup', asyncMiddleWare(signUp));

router.use(serverError);

module.exports = router;

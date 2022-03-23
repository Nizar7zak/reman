const router = require('express').Router();

const asyncMiddleWare = require('../middlewares/async');
const login = require('./login');
const signUp = require('./signup');

router.post('/login', asyncMiddleWare(login));
router.post('/signup', asyncMiddleWare(signUp));

module.exports = router;

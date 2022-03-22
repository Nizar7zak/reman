const router = require('express').Router();
const asyncMiddleWare = require('../middlewares/async');
const signUp = require('./signup');

router.post('/signup', asyncMiddleWare(signUp));

module.exports = router;

const asyncMiddleWare = require('./async');
const admin = require('./admin');
const auth = require('./auth');
const serverError = require('./serverError');

module.exports = {
  asyncMiddleWare, auth, admin, serverError,
};

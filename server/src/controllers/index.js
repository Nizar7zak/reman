const { getProducts, addProduct, getProductById } = require('./products');
const { login, signUp } = require('./users');

module.exports = {
  signUp, login, getProducts, addProduct, getProductById,
};

const {
  getProducts, addProduct, getProductById, addToCart,
} = require('./products');
const { login, signUp } = require('./users');

module.exports = {
  signUp, login, getProducts, addProduct, getProductById, addToCart,
};

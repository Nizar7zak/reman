const {
  getProducts, addProduct, getProductById, addToCart, editProduct, deleteProductById,
} = require('./products');
const { login, signUp } = require('./users');

module.exports = {
  signUp, login, getProducts, addProduct, getProductById, addToCart, editProduct, deleteProductById
};

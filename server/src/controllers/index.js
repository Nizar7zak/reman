const { addToCart, getCartData } = require('./cart');
const { getAllCategories, addNewCategory } = require('./category');
const {
  getProducts, addProduct, getProductById, editProduct, deleteProductById,
} = require('./products');
const { login, signUp } = require('./users');

module.exports = {
  signUp, login, getProducts, addProduct, getProductById, editProduct, deleteProductById, addToCart, getCartData, getAllCategories, addNewCategory,
};



const addProduct = require('./addProduct');
const addToCart = require('./addToCart');
const deleteProductById = require('./deleteProduct');
const editProduct = require('./editProduct');
const getProductById = require('./getProductById');
const getProducts = require('./getProducts');

module.exports = {
  getProducts, addProduct, getProductById, addToCart, editProduct, deleteProductById
};

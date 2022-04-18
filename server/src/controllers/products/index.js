const addProduct = require('./addProduct');
const deleteProductById = require('./deleteProduct');
const editProduct = require('./editProduct');
const getProductById = require('./getProductById');
const getProducts = require('./getProducts');

module.exports = {
  getProducts, addProduct, getProductById, editProduct, deleteProductById
};

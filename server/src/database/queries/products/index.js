const addProductQuery = require('./addProductQuery');
const addToCartQuery = require('./addToCartQuery');
const deleteProductByIdQuery = require('./deleteProductQuery');
const editProductQuery = require('./editProductQuery');
const getProductByIdQuery = require('./getProductByIdQuery');
const getProductByName = require('./getProductsByName');
const getProductsQuery = require('./getProductsQuery');

module.exports = {
  getProductsQuery,
  getProductByName,
  addProductQuery,
  getProductByIdQuery,
  addToCartQuery,
  editProductQuery,
  deleteProductByIdQuery
};

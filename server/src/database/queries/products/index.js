const addProductQuery = require('./addProductQuery');
const addToCartQuery = require('./addToCartQuery');
const getProductByIdQuery = require('./getProductByIdQuery');
const getProductByName = require('./getProductsByName');
const getProductsQuery = require('./getProductsQuery');

module.exports = {
  getProductsQuery, getProductByName, addProductQuery, getProductByIdQuery, addToCartQuery,
};

const connection = require('../../config/connection');

const getAllCategoriesQuery = () => connection.query('SELECT name FROM categories');

module.exports = getAllCategoriesQuery;

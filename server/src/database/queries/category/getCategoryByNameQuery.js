const connection = require('../../config/connection');

const getCategoryByNameQuery = (name) => connection.query('SELECT * FROM categories WHERE name = $1', [name]);

module.exports = getCategoryByNameQuery;

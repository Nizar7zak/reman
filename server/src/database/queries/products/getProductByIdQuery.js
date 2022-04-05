const connection = require('../../config/connection');

const getProductByIdQuery = (id) => connection.query('SELECT * FROM products WHERE id=$1', [id]);

module.exports = getProductByIdQuery;

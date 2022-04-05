const connection = require('../../config/connection');

const getProductById = (id) => connection.query('SELECT * FROM products WHERE id=$1', [id]);

module.exports = getProductById;

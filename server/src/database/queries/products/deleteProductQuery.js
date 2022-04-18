const connection = require('../../config/connection');

const deleteProductByIdQuery = (id) => connection.query('DELETE FROM products WHERE id=$1', [id]);

module.exports = deleteProductByIdQuery;

const connection = require('../../config/connection');

const getCartgoryByIdQuery = (id) => connection.query('SELECT * FROM categories WHERE id = $1', [id]);

module.exports = getCartgoryByIdQuery;

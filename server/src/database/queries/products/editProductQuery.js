const connection = require('../../config/connection');

const editProductQuery = ({ image, name }) => connection.query('UPDATE products SET image = $1 WHERE name = $2 RETURNING *', [
  image,
  name,
]);

module.exports = editProductQuery;

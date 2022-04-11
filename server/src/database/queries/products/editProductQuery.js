const connection = require('../../config/connection');

const editProductQuery = ({
  image, name, price, category, discount,
}) => connection.query('UPDATE products SET image = $1, price = $3, category_id = $4, discount = $5 WHERE name = $2 RETURNING *', [
  image,
  name,
  price,
  category,
  discount,
]);

module.exports = editProductQuery;

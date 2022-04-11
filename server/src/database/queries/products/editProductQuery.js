const connection = require('../../config/connection');

const editProductQuery = ({
  image, name, price, category, discount, id,
}) => connection.query('UPDATE products SET image = $1, name = $2, price = $3, category_id = $4, discount = $5 WHERE id = $6 RETURNING *', [
  image,
  name,
  price,
  category,
  discount,
  id,
]);

module.exports = editProductQuery;

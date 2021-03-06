const connection = require('../../config/connection');

const addProductQuery = ({
  name, price, discount = 0, image, category = 1,
}) => connection.query(
  'INSERT INTO products (name, price, discount, image, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
  [name, price, discount, image, category],
);

module.exports = addProductQuery;

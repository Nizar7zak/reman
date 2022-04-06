const connection = require('../../config/connection');

const addToCartQuery = ({ userId, productId, quantity }) => connection.query(
  'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) ON CONFLICT (product_id, user_id) DO UPDATE SET quantity = $3 RETURNING *',
  [userId, productId, quantity],
);

module.exports = addToCartQuery;

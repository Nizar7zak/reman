const connection = require('../../config/connection');

const getCartByIdQuery = (userId) => connection.query(
  'SELECT * from cart WHERE user_id = $1',
  [userId],
);

module.exports = getCartByIdQuery;

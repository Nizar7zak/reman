const connection = require("../../config/connection");

const editProductRateQuery = ({ productId, rate }) =>
  connection.query("UPDATE products SET rate = $2 WHERE id = $1 RETURNING *", [
    productId,
    rate,
  ]);

module.exports = editProductRateQuery;

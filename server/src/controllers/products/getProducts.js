const { getProductsQuery } = require('../../database/queries/products');

const getProducts = async (req, res) => {
  const queryString = req.query;
  const { rows, rowCount } = await getProductsQuery(queryString);
  if (!rowCount) return res.status(204).send();

  return res.status(200).json({ message: 'products loaded successfully', data: rows });
};

module.exports = getProducts;

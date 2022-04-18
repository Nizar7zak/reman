const { getProductByIdQuery } = require('../../database/queries/products');

const getProductById = async (req, res) => {
  const { id } = req.params;

  const { rows, rowCount } = await getProductByIdQuery(id);
  if (!rowCount) return res.status(404).json({ message: 'product not found' });

  return res.status(200).json({ data: rows[0] });
};

module.exports = getProductById;

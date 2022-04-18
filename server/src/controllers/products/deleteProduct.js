const { getProductByIdQuery, deleteProductByIdQuery } = require('../../database/queries/products');

const deleteProductById = async (req, res) => {
  const { id } = req.params;

  const { rowCount } = await getProductByIdQuery(id);
  if (!rowCount) return res.status(404).json({ message: 'product not found to delete it!' });
  await deleteProductByIdQuery(id);
  return res.status(200).json({message: 'product deleted successfully'})


};

module.exports = deleteProductById;

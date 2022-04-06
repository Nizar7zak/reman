const { getProductByIdQuery, addToCartQuery } = require('../../database/queries/products');

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const { id: userId } = req.user;
  const { rowCount } = await getProductByIdQuery(productId);
  if (!rowCount) return res.status(404).json({ message: 'Product Not Found' });

  const { rows } = await addToCartQuery({ userId, productId, quantity });
  return res.status(201).json({ data: rows[0], message: 'Quantity Product added Successfully' });
};

module.exports = addToCart;

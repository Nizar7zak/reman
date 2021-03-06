const { addToCartQuery } = require('../../database/queries/cart');
const { getProductByIdQuery } = require('../../database/queries/products');

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const { id: userId } = req.user;
  const { rowCount } = await getProductByIdQuery(productId);
  if (!rowCount) return res.status(404).json({ message: 'Product Not Found' });

  const { rows } = await addToCartQuery({ userId, productId, quantity });
  return res.status(202).json({ data: rows[0], message: 'Product added Successfully to cart' });
};

module.exports = addToCart;

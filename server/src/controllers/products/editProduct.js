const { editProductQuery, getProductByIdQuery } = require('../../database/queries/products');
const { uploadToCloudinary, editProductSchema } = require('../../utils');

const editProduct = async (req, res) => {
  const {
    name, image, price, category, discount, id,
  } = req.body;

  await editProductSchema.validateAsync(req.body);
  const { rowCount } = await getProductByIdQuery(id);
  if (!rowCount) return res.status(404).json({ message: 'Product Not Found' });

  const { url } = await uploadToCloudinary(image, { upload_preset: 'dev_setup' });

  const { rows } = await editProductQuery({
    image: url, name, price, category, discount, id,
  });
  return res.status(202).json({ data: rows[0], message: 'Product Updated' });
};

module.exports = editProduct;

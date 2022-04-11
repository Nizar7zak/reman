const { editProductQuery, getProductByName } = require('../../database/queries/products');
const { uploadToCloudinary } = require('../../utils');

const editProduct = async (req, res) => {
  const {
    name, image, price, category, discount,
  } = req.body;

  const { rowCount } = await getProductByName(name);
  if (!rowCount) return res.status(404).json({ message: 'there is no Product with this name' });

  const { url } = await uploadToCloudinary(image, { upload_preset: 'dev_setup' });

  const { rows } = await editProductQuery({
    image: url, name, price, category, discount,
  });
  return res.status(202).json({ data: rows[0], message: 'product updated' });
};

module.exports = editProduct;

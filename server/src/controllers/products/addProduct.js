const {
  getProductByName,
  addProductQuery,
} = require('../../database/queries/products');
const { uploadToCloudinary, addProductSchema } = require('../../utils');

const addProduct = async (req, res) => {
  const {
    name, price, discount, image, category,
  } = req.body;
  
  await addProductSchema.validateAsync(req.body);
  
  const { rowCount } = await getProductByName(name);
  if (rowCount) {
    return res
    .status(400)
    .json({ message: 'Product Already exist, you can edit it.' });
  }
  
  const { url } = await uploadToCloudinary(image, {
    upload_preset: 'dev_setup',
  });
  const { rows } = await addProductQuery({
    name,
    price,
    discount,
    image: url,
    category,
  });

  return res
    .status(201)
    .json({ data: rows[0], message: 'add product successfully' });
};

module.exports = addProduct;

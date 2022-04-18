const { getAllCategoriesQuery } = require('../../database/queries/category');


const getAllCategories = async (req, res) => {
  const { rows, rowCount } = await getAllCategoriesQuery();
  if (!rowCount) return res.status(204).send();

  return res.status(200).json({ message: 'categories loaded successfully', data: rows });
};

module.exports = getAllCategories;

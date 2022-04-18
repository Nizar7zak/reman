const { getCategoryByNameQuery, deleteCategoryQuey } = require('../../database/queries/category');

const deleteCategory = async (req, res) => {
  const { name } = req.body;
  const { rowCount } = await getCategoryByNameQuery(name);
  if (!rowCount)
    return res
      .status(404)
      .json({ message: 'category not found to delete it!' });

  await deleteCategoryQuey(name);
  return res.status(200).json({ message: 'category deleted successfully' });
};

module.exports = deleteCategory;

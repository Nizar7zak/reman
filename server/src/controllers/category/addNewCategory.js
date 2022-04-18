const { addNewCategoryQuery, getCategoryByNameQuery } = require('../../database/queries/category');

const addNewCategory = async (req, res) => {
  const { name } = req.body;
  const { rowCount } = await getCategoryByNameQuery(name);
  if (rowCount) return res.status(404).json({ message: 'category is exist you can edit the name' });
  const { rows } = await addNewCategoryQuery(name);

  return res
    .status(201)
    .json({ message: 'category added successfully', data: rows[0] });
};

module.exports = addNewCategory;

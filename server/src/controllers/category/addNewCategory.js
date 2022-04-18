const { addNewCategoryQuery } = require('../../database/queries/category');

const addNewCategory = async (req, res) => {
  const { name } = req.body;
  const { rows } = await addNewCategoryQuery(name);

  return res
    .status(201)
    .json({ message: 'category added successfully', data: rows[0] });
};

module.exports = addNewCategory;

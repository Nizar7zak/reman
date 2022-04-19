const { getCartgoryByIdQuery, editCategoryNameQuery  } = require('../../database/queries/category');

const editCategoryName = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { rowCount, rows } = await getCartgoryByIdQuery(id);
  if (!rowCount)
    return res
      .status(404)
      .json({ message: 'category not found to edit it!' });

  const { rows: data } = await editCategoryNameQuery({name, id});
  return res.status(202).json({ message: 'category updated successfully', data });
};

module.exports = editCategoryName;

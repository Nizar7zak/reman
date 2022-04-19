const connection = require('../../config/connection');

const editCategoryNameQuery = ({name, id}) => connection.query('UPDATE categories SET name = $1 WHERE id = $2 RETURNING *', [name, id]);

module.exports = editCategoryNameQuery;

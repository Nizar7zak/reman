const connection = require('../../config/connection');

const addNewCategoryQuery = (name) => connection.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);

module.exports = addNewCategoryQuery;

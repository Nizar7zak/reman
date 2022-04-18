const connection = require('../../config/connection');

const deleteCategoryQuey = (name) => connection.query('DELETE FROM categories WHERE name=$1', [name]);

module.exports = deleteCategoryQuey;

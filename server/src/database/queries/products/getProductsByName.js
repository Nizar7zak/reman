const connection = require('../../config/connection');

const getProductByName = (name) => connection.query('SELECT * FROM products WHERE name=$1', [name]);

module.exports = getProductByName;

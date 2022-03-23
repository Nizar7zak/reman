const connection = require('../../config/connection');

const getAllUser = () => connection.query('SELECT * FROM users');

module.exports = getAllUser;

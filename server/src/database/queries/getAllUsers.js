const connection = require('../config/connection');

const getUsers = (email) => connection.query('SELECT * FROM users WHERE email=$1', [email]);

module.exports = getUsers;

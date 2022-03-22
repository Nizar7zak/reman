const connection = require('../config/connection');

const insertNewUser = ({ name, email, password }) => connection.query(
  'INSERT INTO users(name, email, password, isAdmin) VALUES ($1,$2,$3, FALSE) RETURNING email',
  [name, email, password],
);

module.exports = insertNewUser;

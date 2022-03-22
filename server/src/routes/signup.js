const { genSalt, hash } = require('bcrypt');

const { getUsers, insertNewUser } = require('../database/queries');
const { signUpSchema } = require('../utils');

const signUp = async (req, res) => {
  const { email, password, name } = req.body;

  const { error } = signUpSchema.validateAsync(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { rowCount } = await getUsers(email);
  if (rowCount) return res.status(400).send({ message: 'User already registered.' });

  const salt = await genSalt(10);
  const hashed = await hash(password, salt);

  const result = await insertNewUser({ name, email, password: hashed });
  return res.status(201).send({ message: 'registered successfully', data: result.rows[0] });
};

module.exports = signUp;

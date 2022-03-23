const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const { getUserByEmail } = require('../database/queries/user');
const { loginSchema } = require('../utils');

const login = async (req, res) => {
  try {
    await loginSchema.validateAsync(req.body);
  } catch (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  const { rows } = await getUserByEmail(req.body.email);
  if (!rows.length) { return res.status(400).send({ message: 'Invalid Email or Password' }); }

  const {
    id, email, password, isadmin, name,
  } = rows[0];

  const vaildPassword = await compare(req.body.password, password);
  if (!vaildPassword) { return res.status(400).send({ message: 'Invalid Email or Password' }); }

  const token = sign({
    id, email, name, isadmin,
  }, process.env.SECRETTOKENKEY);

  return res.status(201).cookie('token', token).send({ message: 'You are Logged Successfully' });
};

module.exports = login;

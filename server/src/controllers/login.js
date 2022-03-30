const { compare } = require('bcrypt');
const { getUserByEmail } = require('../database/queries/user');
const { asyncSign } = require('../middlewares');
const { loginSchema } = require('../utils');

const login = async (req, res) => {
  await loginSchema.validateAsync(req.body);
  const { rows } = await getUserByEmail(req.body.email);
  if (!rows.length) { return res.status(400).json({ message: 'Invalid Email or Password' }); }

  const {
    id, email, password, isadmin, name,
  } = rows[0];

  const vaildPassword = await compare(req.body.password, password);
  if (!vaildPassword) { return res.status(400).json({ message: 'Invalid Email or Password' }); }

  const token = await asyncSign({
    id, email, name, isadmin,
  });
  return res.status(201).cookie('token', token).json({ message: 'You are Logged Successfully' });
};

module.exports = login;

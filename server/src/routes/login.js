const { compare } = require('bcrypt');

const { getUserByEmail } = require('../database/queries/user');
const { loginSchema } = require('../utils');

const login = async (req, res) => {
  const { error } = await loginSchema.validateAsync(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const { rows } = await getUserByEmail(req.body.email);
  if (!rows.length) return res.status(400).send({ message: 'Invalid Email or Password' });

  const {
    id, name, email, password, isadmin,
  } = rows[0];

  const vaildPassword = await compare(req.body.password, password);
  if (!vaildPassword) return res.status(400).send({ message: 'Invalid Email or Password' });
};

module.exports = login;

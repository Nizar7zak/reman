const { getUserByEmail } = require('../database/queries/user');
const { loginSchema } = require('../utils');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { error } = await loginSchema.validateAsync(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });
};

module.exports = login;

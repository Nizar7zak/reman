const { genSalt, hash } = require('bcrypt');

const { getUserByEmail, insertNewUser } = require('../../database/queries/user');
const { signUpSchema } = require('../../utils');

const signUp = async (req, res) => {
  const { email, password, name } = req.body;
  await signUpSchema.validateAsync(req.body);

  const { rowCount } = await getUserByEmail(email);
  if (rowCount) { return res.status(400).json({ message: 'User already registered.' }); }

  const salt = await genSalt(10);
  const hashed = await hash(password, salt);

  const result = await insertNewUser({ name, email, password: hashed });
  return res
    .status(201)
    .json({ message: 'registered successfully', data: result.rows[0] });
};

module.exports = signUp;

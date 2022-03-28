const asyncVerify = require('./asyncVerifyToken');

const auth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided' });
  const decoded = await asyncVerify(token);
  req.user = decoded;
  return next();
};

module.exports = auth;

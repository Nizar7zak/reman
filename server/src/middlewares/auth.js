const { verify } = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided' });
  try {
    const decoded = verify(token, process.env.SECRETTOKENKEY);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(400).json('Invalid token.');
  }
};

module.exports = auth;

const admin = async (req, res, next) => {
  if (!req.user.isadmin) return res.status(403).json({ message: 'Access denied.' });
  return next();
};

module.exports = admin;

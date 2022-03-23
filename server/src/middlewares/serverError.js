/* eslint-disable no-unused-vars */
const serverError = (err, res, req, next) => {
  res.status(500).json({ message: 'internal server error 500' });
};

module.exports = serverError;

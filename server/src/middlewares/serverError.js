/* eslint-disable no-unused-vars */
const serverError = (err, req, res, next) => {
  if (err.details) {
    return res.status(400).json({ message: err.details[0].message });
  } if (err.message === 'invalid token') {
    return res.status(400).json({ message: err.message });
  }
  return res.status(500).json({ message: 'internal server error 500' });
};

module.exports = serverError;

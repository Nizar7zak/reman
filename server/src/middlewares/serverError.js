/* eslint-disable no-unused-vars */
const serverError = (err, req, res, next) => {
  if (err.details) {
    return res.status(400).json({ message: err.details[0].message });
  } if (err.message === 'invalid token') {
    return res.status(400).json({ message: err.message });
  } if (err.message === 'cloudinary Error') {
    return res.status(503).json({ message: 'Cloudinary can not upload photo' });
  }

  return res.status(500).json({ message: 'internal server error 500' });
};

module.exports = serverError;

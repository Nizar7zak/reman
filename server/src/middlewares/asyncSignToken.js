const { sign } = require('jsonwebtoken');

const asyncSign = ({
  id, email, name, isadmin,
}) => new Promise((resolve, reject) => {
  sign({
    id, name, email, isadmin,
  }, process.env.SECRET_TOKEN, (error, token) => {
    if (error) {
      reject(error);
    }
    resolve(token);
  });
});

module.exports = asyncSign;

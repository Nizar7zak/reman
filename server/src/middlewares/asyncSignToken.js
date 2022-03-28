const { sign } = require('jsonwebtoken');

const asyncSign = ({
  id, email, name, isadmin,
}, secretToken) => new Promise((resolve, reject) => {
  sign({
    id, name, email, isadmin,
  }, secretToken || process.env.SECRET_TOKEN, (error, token) => {
    if (error) {
      reject(error);
    }
    resolve(token);
  });
});

module.exports = asyncSign;

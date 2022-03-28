const { verify } = require('jsonwebtoken');

const asyncVerify = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET_TOKEN, (error, decoded) => {
    if (error) {
      reject(error);
    }
    resolve(decoded);
  });
});

module.exports = asyncVerify;

const uploadToCloudinary = require('./cloudinary');
const loginSchema = require('./loginValidation');
const signUpSchema = require('./signupValidation');
const addProductSchema = require('./addProductValidation');
const editProductSchema = require('./editProductSchema');

module.exports = {
  signUpSchema, loginSchema, addProductSchema, uploadToCloudinary, editProductSchema,

};

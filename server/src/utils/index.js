const uploadToCloudinary = require('./cloudinary');
const loginSchema = require('./loginValidation');
const signUpSchema = require('./signupValidation');

module.exports = { signUpSchema, loginSchema, uploadToCloudinary };

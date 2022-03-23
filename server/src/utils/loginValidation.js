const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
}).options({ abortEarly: true });
module.exports = loginSchema;

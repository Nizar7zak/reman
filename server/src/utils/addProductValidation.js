const Joi = require('joi');

const addProductSchema = Joi.object({
  name: Joi.string().required().min(4).max(10),
  image: Joi.string().required(),
  category: Joi.string().required(),
  discount: Joi.number().required(),
  price: Joi.number().required(),
}).options({ abortEarly: true });
module.exports = addProductSchema;

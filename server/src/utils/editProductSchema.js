const Joi = require('joi');

const editProductSchema = Joi.object({
  name: Joi.string().required().min(4).max(20),
  image: Joi.string().required(),
  category: Joi.string().required(),
  discount: Joi.number().required(),
  price: Joi.number().required(),
  id: Joi.number().required(),
}).options({ abortEarly: true });
module.exports = editProductSchema;

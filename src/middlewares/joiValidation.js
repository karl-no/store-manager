const joi = require('joi');

const checkName = joi.object({
  name: joi.string().min(5).required(),
});

const checkSale = joi.object({
  productId: joi.number().integer().min(1).required(),
  quantity: joi.number().integer().min(1).required(),
});

module.exports = {
  checkName,
  checkSale,
};
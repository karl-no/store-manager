const joi = require('joi');
const errorMap = require('../utils/errorMap');

const checkName = joi.object({
  name: joi.string().min(5).required(),
});

const checkSale = joi.object({
  productId: joi.number().integer().min(1).required(),
  quantity: joi.number().integer().min(1).required(),
});

const nameValidation = async (req, res, next) => {
  const { name } = req.body;
  const { error } = checkName.validate({ name });
  if (error) {
    const { type, message } = error.details[0];
    return res.status(errorMap.mapError(type)).json({ message });
  }
  next();
};

const errorCheck = (sale) => {
  const typeOfError = { type: null };
  sale.forEach((item) => {
    const { error } = checkSale.validate(item);
    if (error && !typeOfError.type) {
      const { type, message } = error.details[0];
      typeOfError.type = type;
      typeOfError.message = message;
    }
  });
  return typeOfError;
};

const saleValidation = (req, res, next) => {
  const sale = req.body;
  const { type, message } = errorCheck(sale);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  next();
};

module.exports = {
  nameValidation,
  saleValidation,
};
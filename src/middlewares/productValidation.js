const joiValidation = require('./joiValidation');
const errorMap = require('../utils/errorMap');

const productValidation = (req, res, next) => {
  const { id } = req.params;
  const { error } = joiValidation.checkProduct.validate({ id });
  if (error) {
    const { type, message } = error.details[0];
    return res.status(errorMap.mapError(type)).json({ message });
  }
  next();
};

module.exports = productValidation;
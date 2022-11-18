const joiValidation = require('./joiValidation');
const errorMap = require('../utils/errorMap');

const nameValidation = async (req, res, next) => {
  const { name } = req.body;
  const { error } = joiValidation.checkName.validate({ name });
  if (error) {
    const { type, message } = error.details[0];
    return res.status(errorMap.mapError(type)).json({ message });
  }
  next();
};

module.exports = nameValidation;
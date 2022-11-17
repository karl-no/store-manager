const joi = require('joi');
const errorMap = require('../utils/errorMap');

const checkName = joi.object({
  name: joi.string().min(5).required(),
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

module.exports = {
  nameValidation,
};
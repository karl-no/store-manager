const joi = require('joi');

const checkName = joi.object({
  name: joi.string()
    .min(5)
    .required(),
});

const nameValidation = async (req, res, next) => {
  const { name } = req.body;
  const { error } = checkName.validate({ name });
  if (error !== undefined) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  nameValidation,
};
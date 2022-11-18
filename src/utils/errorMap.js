const errorMap = { 
  NOT_FOUND: 404,
  INVALID_VALUE: 403, // List Of Erros From Joi API
  'any.required': 400, // https://joi.dev/api/?v=17.7.0#anyrequired
  'string.min': 422, // https://joi.dev/api/?v=17.7.0#stringmin
  'number.min': 422, // https://joi.dev/api/?v=17.7.0#numbermin
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  mapError,
};
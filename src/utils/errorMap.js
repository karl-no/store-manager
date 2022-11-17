const errorMap = { 
  NOT_FOUND: 404,
  INVALID_VALUE: 403, // List Of Erros From Joi API
  'string.min': 422, // https://joi.dev/api/?v=17.7.0#stringmin
  'any.required': 400, // https://joi.dev/api/?v=17.7.0#anyrequired
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  mapError,
};
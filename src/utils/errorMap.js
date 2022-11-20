const errorMap = { 
  NOT_FOUND: 404,
  INVALID_VALUE: 404,
  QUANTITY_INVALID: 422,
  PRODUCT_NOT_FOUND: 404,
  BAD_REQUEST: 400, // List Of Erros From Joi API
  'string.min': 422, // https://joi.dev/api/?v=17.7.0#stringmin
  'number.min': 422, // https://joi.dev/api/?v=17.7.0#numbermin
  'any.required': 400, // https://joi.dev/api/?v=17.7.0#anyrequired
  'string.required': 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
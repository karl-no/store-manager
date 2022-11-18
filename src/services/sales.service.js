const salesModel = require('../models/sales.model');
const validateSale = require('./validations/validateSale');

const saveSale = async (sale) => {
  const error = await validateSale.validateTheSale(sale);
  if (error.type) return error;

  const idSale = await salesModel.postSale();
  await Promise.all(
    sale.map(async ({ productId, quantity }) =>
      salesModel.postSaleByProduct(idSale, productId, quantity)),
  );

  return {
    type: null,
    message: { id: idSale, itemsSold: sale },
  };
};

module.exports = {
  saveSale,
};
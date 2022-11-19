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

const selectAllSales = async () => {
  const result = await salesModel.selectAllSales();
  return { type: null, message: result };
};

const checkIdSales = async (id) => {
  const checkSalesId = await salesModel.selectSaleById(id);
  if (!checkSalesId.length) return undefined;
  return checkSalesId;
};

const selectSaleById = async (id) => {
  const checkSale = await checkIdSales(id);
  if (!checkSale) return { type: 'NOT_FOUND', message: 'Sale not found' };
  return { type: null, message: checkSale };
};

module.exports = {
  saveSale,
  selectAllSales,
  selectSaleById,
};
const productsModel = require('../../models/products.model');

const validateTheSale = async (sales) => {
  if (sales.some(({ quantity }) => Number(quantity) <= 0)) {
    return {
      type: 'QUANTITY_INVALID', message: '"quantity" must be greater than or equal to 1',
    };
  }

  const saleId = await Promise.all(
    sales.map(async ({ productId }) => productsModel.selectProductById(productId)),
  );

  const notFoundProduct = saleId.some((sale) => sale === undefined);
  if (notFoundProduct) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  return { type: null };
};

module.exports = {
  validateTheSale,
};
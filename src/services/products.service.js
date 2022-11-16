const productsModel = require('../models/products.model');

const getProducts = async () => {
  const result = await productsModel.selectAllProducts();
  return { message: result };
};

const getProductsById = async (id) => {
  const result = await productsModel.selectProductById(id);
  if (!result) return { type: 'ID_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: result };
};

module.exports = {
  getProducts,
  getProductsById,
};

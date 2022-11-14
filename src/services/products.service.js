const productsModel = require('../models/products.model');

const getProducts = async () => {
  const result = await productsModel.getProducts();
  return { type: null, message: result };
};

const getProductsById = async (id) => {
  const result = await productsModel.getProductsById(id);
  return { type: null, message: result };
};

module.exports = {
  getProducts,
  getProductsById,
};

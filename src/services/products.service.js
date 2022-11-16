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

const postProduct = async (name) => {
  const productId = await productsModel.insertProduct(name);
  const product = await productsModel.selectProductById(productId);
  return { type: null, message: product };
};

module.exports = {
  getProducts,
  getProductsById,
  postProduct,
};

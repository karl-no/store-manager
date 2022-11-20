const productsModel = require('../models/products.model');

const getProducts = async () => {
  const result = await productsModel.selectAllProducts();
  return { message: result };
};

const postProduct = async (name) => {
  const productId = await productsModel.insertProduct(name);
  const product = await productsModel.selectProductById(productId);
  return { type: null, message: product };
};

const checkProducts = async (id) => {
  const items = await productsModel.selectAllProducts();
  const result = items.find((item) => item.id === Number(id));
  return result;
};

const getProductsById = async (id) => {
  const result = await checkProducts(id);
  if (!result) return { type: 'ID_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: result };
};

const updateProduct = async (product) => {
  const item = await checkProducts(product.id);
  if (!item) return { type: 'NOT_FOUND', message: 'Product not found' };
  const result = await productsModel.updateProduct(product);
  return { type: null, message: result };
};

module.exports = {
  getProducts,
  getProductsById,
  postProduct,
  updateProduct,
};

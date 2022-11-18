const productsModel = require('../models/products.model');
const salesModel = require('../models/sales.model');

const getProducts = async (product) => {
  const products = await productsModel.getProducts();
  const selectSoldProducts = await product.every(
    (soldProduct) => products.find((item) => item.id === soldProduct.productId),
  );
  if (!selectSoldProducts) return false;
  return true;
};

const postSaleByProduct = async (product) => {
  const getProduct = await getProducts(product);
  if (!getProduct) return { type: 'NOT_FOUND', message: 'Product not found' };
  const creatSale = await salesModel.postSale();
  await Promise.all(
    product.map((sale) => product.postSaleByProduct({ ...sale, creatSale })),
  );
  return { type: null, message: { id: creatSale, itemSold: product } };
};

module.exports = {
  postSaleByProduct,
};
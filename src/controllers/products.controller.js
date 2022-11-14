const productsService = require('../services/products.service');

const getProducts = async (_req, res) => {
  const { type, message } = await productsService.getProducts();

  if (type) return res.status(type).json(message);
  res.status(200).json(message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductsById(id);

  if (!message) res.status(404).json({ message: 'Product not found' });

  if (type) return res.status(type).json(message);
  res.status(200).json(message);
};

module.exports = {
  getProducts,
  getProductsById,
};

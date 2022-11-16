const productsService = require('../services/products.service');

const getProducts = async (_req, res) => {
  const { message } = await productsService.getProducts();

  res.status(200).json(message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductsById(id);

  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

module.exports = {
  getProducts,
  getProductsById,
};

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

const postProduct = async (req, res) => {
  const { name } = req.body;
  const product = await productsService.postProduct(name);
  if (product.type) return res.status(422).json(product.message);
  return res.status(201).json(product.message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsService.updateProduct({ id, name });
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);
  if (type) return res.status(404).json({ message });
  res.status(204).json();
};

module.exports = {
  getProducts,
  getProductsById,
  postProduct,
  updateProduct,
  deleteProduct,
};

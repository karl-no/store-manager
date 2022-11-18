const salesService = require('../services/sales.service');

const postSaleByProduct = async (req, res) => {
  const { type, message } = await salesService.postSaleByProduct(req.body);
  if (type) return res.status(404).json({ message });
  res.status(201).json(message);
};

module.exports = {
  postSaleByProduct,
};
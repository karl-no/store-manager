const salesService = require('../services/sales.service');
const errorMap = require('../utils/errorMap');

const saveSale = async (req, res) => {
  const { type, message } = await salesService.saveSale(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

const selectAllSales = async (_req, res) => {
  const { type, message } = await salesService.selectAllSales();
  if (type) return res.status(404).json(message);
  res.status(200).json(message);
};

const selectSaleById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.selectSaleById(Number(id));
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

module.exports = {
  saveSale,
  selectAllSales,
  selectSaleById,
};
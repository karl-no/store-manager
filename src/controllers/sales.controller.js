const salesService = require('../services/sales.service');
const errorMap = require('../utils/errorMap');

const saveSale = async (req, res) => {
  const { type, message } = await salesService.saveSale(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = {
  saveSale,
};
const express = require('express');
const salesController = require('../controllers/sales.controller');
const saleValidation = require('../middlewares/saleValidation');

const router = express.Router();

router.post('/', saleValidation, salesController.saveSale);

module.exports = router;

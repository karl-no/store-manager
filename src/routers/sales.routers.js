const express = require('express');
const salesController = require('../controllers/sales.controller');
const { saleValidation } = require('../middlewares/joiValidation');

const router = express.Router();

router.post('/', saleValidation, salesController.postSaleByProduct);

module.exports = router;

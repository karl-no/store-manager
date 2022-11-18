const express = require('express');
const productsController = require('../controllers/products.controller');
const nameValidation = require('../middlewares/nameValidation');

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProductsById);

router.post('/', nameValidation, productsController.postProduct);

module.exports = router;

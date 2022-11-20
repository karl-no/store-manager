const express = require('express');
const productsController = require('../controllers/products.controller');
const nameValidation = require('../middlewares/nameValidation');
const productValidation = require('../middlewares/productValidation');

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProductsById);

router.post('/', nameValidation, productsController.postProduct);

router.put('/:id', nameValidation, productValidation, productsController.updateProduct);

router.delete('/:id', productValidation, productsController.deleteProduct);

module.exports = router;

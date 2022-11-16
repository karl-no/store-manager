const express = require('express');
const productsController = require('../controllers/products.controller');
// const nameValidation = require('../middlewares/joiValidation');

const router = express.Router();

router.get('/', productsController.getProducts);

router.get('/:id', productsController.getProductsById);
router.post('', productsController.postProduct);

module.exports = router;
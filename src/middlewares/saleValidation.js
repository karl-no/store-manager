module.exports = (req, res, next) => {
  const idProduct = req.body.some((product) => !product.productId);
  const quantityProduct = req.body.some(
    (product) => !product.quantity && product.quantity !== 0,
  );
  if (idProduct) {
    return res.status(400).json({
      message: '"productId" is required',
    });
  }
  if (quantityProduct) {
    return res.status(400).json({
      message: '"quantity" is required',
    });
  }
  return next();
};

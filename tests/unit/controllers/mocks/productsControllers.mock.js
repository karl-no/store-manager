const everyProduct = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

const productById = {
  type: null,
  message: {
    id: 1,
    name: "Martelo de Thor",
  },
};

const requisitionGetProductsById = {
  params: {
    id: 1,
  },
};

const errorGetProductsById = {
  params: {
    id: 5,
  },
};

const errorMessage = {
  type: 'ID_NOT_FOUND',
  message: 'Product not found'
};

module.exports = {
  everyProduct,
  productById,
  requisitionGetProductsById,
  errorGetProductsById,
  errorMessage,
};
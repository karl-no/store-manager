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
  id: 1,
  name: "Martelo de Thor"
};

const errorMessage = {
  type: 'ID_NOT_FOUND',
  message: 'Product not found'
};

module.exports = {
  everyProduct,
  productById,
  errorMessage,
};
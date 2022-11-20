const saleId = 1;
const incorrectSaleId = 7;

const allSales = [
  { id: 1, date: "2022-11-14T10:51:53.000Z" },
  { id: 2, date: "2022-11-14T10:51:53.000Z" },
];

const salesByIdCorrectInfo = [
  {
    "productId": 1,
    "quantity": 5,
    "date": "2022-11-18T22:53:29.000Z"
  },
  {
    "productId": 2,
    "quantity": 10,
    "date": "2022-11-18T22:53:29.000Z"
  }
];

module.exports = {
  saleId,
  allSales,
  salesByIdCorrectInfo,
  incorrectSaleId,
};
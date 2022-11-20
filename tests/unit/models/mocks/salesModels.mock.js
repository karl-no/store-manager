const insertId = 3;

const paramsPostSaleProduct = [2, 1, 2];

const executeConnection = {
  query:
    "INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)",
  values: paramsPostSaleProduct,
};

const allSales = [
  [
    { saleId: 1, productId: 1, quantity: 5 },
  ],
  [
    { saleId: 1, productId: 2, quantity: 10 },
  ],
  [
    { saleId: 2, productId: 3, quantity: 15 },
  ],
];

const salesProductResponse = [
  { sale_id: 1, product_id: 1, quantity: 5 },
  { sale_id: 1, product_id: 2, quantity: 10 },
];

module.exports = {
  insertId,
  paramsPostSaleProduct,
  executeConnection,
  allSales,
  salesProductResponse,
}
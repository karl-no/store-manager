const connection = require('./connection');

const postSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ();',
  );
  return insertId;
};

const postSaleByProduct = async (saleId, productId, quantity) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
};

module.exports = {
  postSale,
  postSaleByProduct,
};
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

const selectAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT s_pro.sale_id AS saleId, s_pro.product_id AS productId, s_pro.quantity, s.date
    FROM StoreManager.sales_products AS s_pro
    INNER JOIN StoreManager.sales AS s
    ON s_pro.sale_id = s.id
    ORDER BY saleId, productID;`,
  );
  return result;
};

const selectSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT s_pro.product_id AS productId, s_pro.quantity, s.date
    FROM StoreManager.sales_products AS s_pro
    INNER JOIN StoreManager.sales AS s
    ON s_pro.sale_id = s.id
    AND s.id = ?
    ORDER BY s.id, productID;`,
    [id],
  );
  return result;
};

module.exports = {
  postSale,
  postSaleByProduct,
  selectAllSales,
  selectSaleById,
};
const connection = require('./connection');

const getAllSales = async () => {
  try {
    const db = await connection();
    const searchQuery = await db.getTable('sales').select([])
      .execute();
    const results = await searchQuery.fetchAll();
    const salesResults = results.map(
      ([
        id,
        userID,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
      ]) => ({
        id,
        userID,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
      }),
    );
    return salesResults;
  } catch (error) {
    console.log('estamos no model', error);
    return null;
  }
};

const insertSale = async (
  userId,
  totalPrice,
  deliveryAddr,
  deliveryNumber,
  saleDate,
) => {
  const conn = await connection();
  await conn
    .getTable('sales')
    .insert([
      'user_id',
      'total_price',
      'delivery_address',
      'delivery_number',
      'sale_date',
      'status',
    ])
    .values(
      userId,
      totalPrice,
      deliveryAddr,
      deliveryNumber,
      saleDate,
      'pending',
    )
    .execute();
};

module.exports = {
  getAllSales,
  insertSale,
};
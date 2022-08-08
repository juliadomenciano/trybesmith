import { Pool, ResultSetHeader } from 'mysql2/promise';
import { OrderResponse, Orders, OrdersCreation, Payload, RawOrders } from '../interfaces/index';

function formatProductIds(order: RawOrders[]) {
  // console.log(order[1].productId);
  
  return order.map((item: RawOrders) => ({
    id: item.id,
    userId: item.userId,
    productsIds: (item.productId.split(',').map((id: string) => Number(id))),
  }));
}

class OrderModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async (): Promise<Orders[]> => {
    const sql = `SELECT o.*, group_concat(p.id)
    as productId FROM Trybesmith.Products as p
    RIGHT OUTER JOIN Trybesmith.Orders as o
    ON p.orderId = o.id
    GROUP BY o.id
    ORDER bY o.userId`;
    const [result] = await this.connection.query(sql);
    const newResult = formatProductIds(result as RawOrders[]);
    return newResult;
  };

  create = async (order: OrdersCreation, user: Payload): Promise<OrderResponse> => {
    console.log(user);
    const sql = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const [result] = await this.connection.execute<ResultSetHeader>(sql, [user.data.id]);

    const { insertId: id } = result;
    console.log(id, order.productsIds);

    order.productsIds.forEach(async (item): Promise<void> => {
      console.log(id, item);
      const sql2 = `UPDATE Trybesmith.Products
      SET orderId = ?
      WHERE id = ?`;
      await this.connection.query(sql2, [id, item]);
    });
   
    const newResult = { userId: user.data.id, productsIds: order.productsIds } as OrderResponse;
    console.log(newResult);
    return newResult as OrderResponse;
  };
}

export default OrderModel;
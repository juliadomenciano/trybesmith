import { Pool } from 'mysql2/promise';
import { Orders, RawOrders } from '../interfaces/index';

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
    console.log(result);
    const newResult = formatProductIds(result as RawOrders[]);
    console.log(newResult);
    return newResult;
  };
}

export default OrderModel;
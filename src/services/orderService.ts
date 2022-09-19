import connection from '../models/connection';

import OrderModel from '../models/orderModel';

import { OrderResponse, Orders, OrdersCreation, Payload } from '../interfaces/index';

class OrderService {
  public orderModel: OrderModel;

  constructor(model: OrderModel = new OrderModel(connection)) {
    this.orderModel = model;
  }

  getAll = async (): Promise<Orders[]> =>
    this.orderModel.getAll();

  create = async (order: OrdersCreation, user: Payload): Promise<OrderResponse> => {
    if (order.productsIds.length < 1) {
      const error = new Error('"productsIds" must include only numbers');
      error.name = 'LengthValidation';
      throw error;
    }
    if (typeof order.productsIds !== 'object') {
      const error = new Error('"productsIds" must be an array');
      error.name = 'LengthValidation';
      throw error;
    }
    const result = await this.orderModel.create(order, user);
    return result;
  };
}

export default OrderService;
import connection from '../models/connection';

import OrderModel from '../models/orderModel';

import { Orders } from '../interfaces/index';

class OrderService {
  public orderModel: OrderModel;

  constructor(model: OrderModel = new OrderModel(connection)) {
    this.orderModel = model;
  }

  getAll = async (): Promise<Orders[]> =>
    this.orderModel.getAll();
}

export default OrderService;
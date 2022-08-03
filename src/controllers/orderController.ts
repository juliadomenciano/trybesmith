import { Request, Response } from 'express';
import OrderService from '../services/orderService';

class OrderController {
  public service: OrderService;

  constructor(service: OrderService = new OrderService()) {
    this.service = service;
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const result = await this.service.getAll();
    return res.status(200).json(result);
  }
}

export = OrderController;
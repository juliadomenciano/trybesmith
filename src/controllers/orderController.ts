import { Request, Response } from 'express';
import { Authorization, OrdersCreation, Payload } from '../interfaces';
import { validateToken } from '../middlewares/validations';
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

  public async create(req: Request, res: Response): Promise<Response> {
    const { authorization } = req.headers as Authorization;
    const user = validateToken(authorization) as Payload;
    const order = req.body as OrdersCreation;
    if (!order.productsIds) {
      const error = new Error('"productsIds" is required');
      error.name = 'ValidationError';
      throw error;
    }
    const result = await this.service.create(order, user);
    return res.status(201).json(result);
  }
}

export = OrderController;
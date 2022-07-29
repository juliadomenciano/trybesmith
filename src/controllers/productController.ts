import { Request, Response } from 'express';

import { ProductCreation } from '../interfaces';
import ProductService from '../services/productService';

class ProductController {
  public service: ProductService;

  constructor(service: ProductService = new ProductService()) {
    this.service = service;
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const product = req.body as ProductCreation;
    const result = await this.service.create(product);
    return res.status(201).json(result);
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    console.log('oi');
    const result = await this.service.getAll();
    return res.status(200).json(result);
  }
}

export = ProductController;
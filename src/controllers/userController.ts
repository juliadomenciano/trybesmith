import { Request, Response } from 'express';

import { UserCreation } from '../interfaces';
import { validateUser } from '../middlewares/validations';
import UserService from '../services/userService';

class UserController {
  public service: UserService;

  constructor(service: UserService = new UserService()) {
    this.service = service;
  }

  public async create(req: Request, res: Response): Promise<Response> {
    validateUser(req.body);
    const user = req.body as UserCreation;
    const result = await this.service.create(user);
    return res.status(201).json({ token: result });
  }

  // public async getAll(req: Request, res: Response): Promise<Response> {
  //   const result = await this.service.getAll();
  //   return res.status(200).json(result);
  // }
}

export = UserController;
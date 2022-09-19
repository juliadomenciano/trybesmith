import { Request, Response } from 'express';

import { Login } from '../interfaces';
import AuthService from '../services/authService';

class AuthController {
  public service: AuthService;

  constructor(service: AuthService = new AuthService()) {
    this.service = service;
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body as Login;
    await this.service.validateBody(req.body);
    const token = await this.service.login(username, password);
    return res.status(200).json({ token });
  }
}

export = AuthController;
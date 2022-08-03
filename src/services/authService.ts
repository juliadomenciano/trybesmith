import Joi from 'joi';
import JwtService from './jwtService';

import { Login } from '../interfaces/index';
import connection from '../models/connection';
import UserModel from '../models/userModel';

class AuthService {
  public service: JwtService;

  public userModel: UserModel;

  constructor(
    service: JwtService = new JwtService(),
    model: UserModel = new UserModel(connection),
  ) {
    this.service = service;
    this.userModel = model;
  }

  validateBody = (data: Login) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });

    const { error, value } = schema.validate(data);

    if (error) {
      const e = new Error(error.details[0].message);
      e.name = 'ValidationError';
      console.log({ e });
      throw e;
    }
    
    return value;
  };

  login = async (username: string, password: string): Promise<string> => {
    const [getUser] = await this.userModel.findOne(username);
    if (!getUser || getUser.password !== password) {
      const e = new Error('Username or password invalid');
      e.name = 'Authorization';
      console.log({ e });
      throw e;
    }

    const { id } = getUser;

    const token = this.service.createToken({ id, username });

    return token;
  };
}

export default AuthService;
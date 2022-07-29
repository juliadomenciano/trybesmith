import connection from '../models/connection';

import UserModel from '../models/userModel';

import { UserCreation } from '../interfaces/index';

class UserService {
  public userModel: UserModel;

  constructor(model: UserModel = new UserModel(connection)) {
    this.userModel = model;
  }

  create = async (user: UserCreation): Promise<string> =>
    this.userModel.create(user);

  // getAll = async (): Promise<ProductResponse[]> =>
  //   this.userModel.getAll();
}

export default UserService;
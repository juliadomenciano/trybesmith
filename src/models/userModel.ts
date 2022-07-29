import { Pool } from 'mysql2/promise';
import { UserCreation } from '../interfaces/index';

class UserModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async (user: UserCreation): Promise<string> => {
    const { username, classe, level, password } = user;
    const sql = `INSERT INTO Trybesmith.Users 
    (username, classe, level, password) VALUES (?, ?, ?, ?)`;
    await this.connection.query(sql, [username, classe, level, password]);

    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
    SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
    return token;
  };

  // getAll = async (): Promise<ProductResponse[]> => {
  //   const sql = 'SELECT * FROM Trybesmith.Products';
  //   const [result] = await this.connection.query(sql);
  //   console.log(result);

  //   return result as ProductResponse[];
  // };
}

export default UserModel;
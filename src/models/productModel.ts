import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ProductCreation, ProductResponse } from '../interfaces/index';

class ProductModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async (product: ProductCreation): Promise<ProductResponse> => {
    const { name, amount } = product;
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [result] = await this.connection.execute<ResultSetHeader>(sql, [name, amount]);

    const { insertId: id } = result;
    const newProduct: ProductResponse = { id, name, amount };
    return newProduct;
  };

  getAll = async (): Promise<ProductResponse[]> => {
    const sql = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection.query(sql);
    console.log(result);

    return result as ProductResponse[];
  };
}

export default ProductModel;
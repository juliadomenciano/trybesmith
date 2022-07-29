import connection from '../models/connection';

import ProductModel from '../models/productModel';

import { ProductCreation, ProductResponse } from '../interfaces/index';

class ProductService {
  public productModel: ProductModel;

  constructor(model: ProductModel = new ProductModel(connection)) {
    this.productModel = model;
  }

  create = async (product: ProductCreation): Promise<ProductResponse> =>
    this.productModel.create(product);
}

export default ProductService;
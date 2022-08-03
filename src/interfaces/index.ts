export interface ProductCreation {
  name: string;
  amount: string;
}

export interface ProductResponse {
  id: number;
  name: string;
  amount: string;
}

export interface UserCreation {
  username: string;
  classe: string;
  level: number;
  password: string
}

export interface RawOrders {
  id: number;
  userId: number;
  productId: string;
}

export interface Orders {
  id: number;
  userId: number;
  productsIds: number[];
}

export interface Login {
  username: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface Token {
  token: string;
}

export interface Err {
  name: string;
  message: string;
}

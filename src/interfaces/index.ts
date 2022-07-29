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

// export const Token: string;
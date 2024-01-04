import { HttpResponse } from './protocols';
export interface Product {
  id: String;
  product: String;
  code: String;
  price: number;
  currentStock: number;
  minStock: number;
  maxStock: number;
}

export interface GetProductsControllerModel {
  handle(): Promise<HttpResponse<Product[]>>
}



import { GetProductsControllerModel, Product } from "@/interfaces/product";

class GetProductsController implements GetProductsControllerModel {
  constructor(private readonly showProducts: Promise<Product[]>) { }
  async handle() {
    try {
      const products = await this.showProducts;

      return {
        statusCode: 200,
        body: products,
        msg: "Produtos carregados!"
      }
    } catch (e) {
      return {
        statusCode: 500,
        body: [],
        msg: "Houve algum problema"
      }
    }
  }
}

export default GetProductsController

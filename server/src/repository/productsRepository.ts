import { Product } from "@/interfaces/product";
import { Repository } from "@/interfaces/protocols";
import { database } from "../database/database";

class ProductRepository implements Repository<Product> {
  async findAll(): Promise<Product[]> {
    await database.connect();
    const collection = database.db.collection<Product>('products');
    const res = collection.find({});
    const products: Product[] = await res.toArray()
    return products.length > 0 ? products : [];
  }
}

export default new ProductRepository();

import { Product } from "@/interfaces/product";
import { database } from "../database/database";

class ProductRepository {
  async findAll(dataCollection: string): Promise<Product[]> {
    await database.connect();
    const collection = database.db.collection<Product>(dataCollection);
    const res = collection.find({});
    const products: Product[] = await res.toArray()
    return products.length > 0 ? products : [];
  }

  async findOne(dataCollection: string, product: String): Promise<Product | null> {
    await database.connect();
    const collection = database.db.collection<Product>(dataCollection);
    const res = collection.findOne({ product });
    return res
  }

  async insertOne(data: Product, dataCollection: string): Promise<void> {
    await database.connect();
    const collection = database.db.collection(dataCollection);
    await collection.createIndex({ product: 1 }, { unique: true })
    await collection.insertOne(data);
  }

}

export default new ProductRepository();

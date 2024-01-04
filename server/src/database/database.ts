import dotenv from 'dotenv';
import { Db, MongoClient as Mongo } from 'mongodb';

dotenv.config();

export const database = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.CONNECTION_URL
    try {
      if (typeof url === 'string') {
        const client = new Mongo(url);
        const db = client.db("stock");

        this.client = client;
        this.db = db;
        console.log(await db.stats().then(res => res.ok));
      }
    }
    catch (e) {
      console.log(e)
    }
  }
}

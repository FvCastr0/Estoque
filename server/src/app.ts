import product from '@/routes/product';
import cors from 'cors';
import express, { urlencoded, type Application } from 'express';
import helmet from 'helmet';
import { database } from './database/database';
class App {
  app: Application = express();

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.connectDB();
  }

  middlewares(): void {
    this.app.use(express.json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(cors());
  }

  routes(): void {
    this.app.use('/', product);
  }

  async connectDB() {
    database.connect();
  }
}

export default new App().app;

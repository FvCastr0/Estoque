import GetProductsController from '@/controllers/products/getProducts';
import productsRepository from '@/repository/productsRepository';
import { Router } from 'express';
const router = Router();

router.get('/', async (req, res) => {
  const products = new GetProductsController(productsRepository.findAll());
  const productsData = await products.handle();

  res
    .status(productsData.statusCode)
    .json({
      msg: productsData.msg,
      body: productsData.body
    })
})


export default router;

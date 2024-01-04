import GetProductsController from "../controllers/products/getProducts";
import productsRepository from "../repository/productsRepository";


describe('Products', () => {
  it('should return a Promise with an array of products', async () => {
    const products = await productsRepository.findAll();

    expect(products).toBeDefined();
    expect(products.length).toBeGreaterThanOrEqual(0)
  })

  it('should return the statusCode, body and msg. And the body have to contain a list of Products', async () => {
    const getProducts = new GetProductsController(productsRepository.findAll())
    const productsData = await getProducts.handle();

    expect(productsData.statusCode).toBe(200);
    expect(productsData.msg).toBe('Produtos carregados!')
    expect(productsData.body).toBeDefined()
  })
})

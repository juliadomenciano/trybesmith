import { Router } from 'express';
import ProductController from '../controllers/productController';
import validateProduct from '../middlewares/validations';

const router = Router();

const productController = new ProductController();

router.use(validateProduct);

router.get(
  '/', 
  productController.getAll,
);
router.post('/', (req, res) => productController.create(req, res));

export default router;
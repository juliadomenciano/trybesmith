import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();

const productController = new ProductController();

router.post('/', (req, res) => productController.create(req, res));

export default router;
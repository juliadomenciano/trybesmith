import { Router } from 'express';
import OrderController from '../controllers/orderController';

const router = Router();

const orderController = new OrderController();

router.get('/', (req, res) => orderController.getAll(req, res));

export default router;
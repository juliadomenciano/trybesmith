import { Router } from 'express';

import AuthController from '../controllers/authController';

const router = Router();
const authController = new AuthController();

router.post('/', (req, res) => authController.login(req, res));

export default router;
import { Router } from 'express';

import { login, logout, signup } from '../controllers/authController.ts';

import { EAuthRoutes } from '../types/Enum.ts';

const router = Router();

router.post('/signup', signup);
router.post(EAuthRoutes.login, login);
router.post(EAuthRoutes.logout, logout);

export default router;

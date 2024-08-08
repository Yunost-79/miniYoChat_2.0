import { Router } from 'express';

import { protectRoute } from '../middleware/protectRoute.ts';
import { getUsersForSidebar } from '../controllers/userController.ts';
import { EUserRoutes } from '../types/Enum.ts';

const router = Router();

router.get(EUserRoutes.main, protectRoute, getUsersForSidebar);

export default router;

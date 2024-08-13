import { Router } from 'express';

import { protectRoute } from '../middleware/protectRoute.ts';
import { getUpdateUser, getUsersForSidebar } from '../controllers/userController.ts';
import { EUserRoutes } from '../types/Enum.ts';

const router = Router();

router.get(EUserRoutes.main, protectRoute, getUsersForSidebar);
router.get(EUserRoutes.updateUser, protectRoute, getUpdateUser);

export default router;

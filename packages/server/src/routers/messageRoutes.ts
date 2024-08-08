import { Router } from 'express';

import { getMessage, sendMessage } from '../controllers/messageController.ts';
import { protectRoute } from '../middleware/protectRoute.ts';

import { EMessageRoutes } from '../types/Enum.ts';

const router = Router();

router.get(EMessageRoutes.dynamicId, protectRoute, getMessage);
router.post(EMessageRoutes.sendDynamicId, protectRoute, sendMessage);

export default router;

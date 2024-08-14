import { Router } from 'express';

import { getMessage, sendMessage } from '../controllers/messageController.ts';
import { protectRoute } from '../middleware/protectRoute.ts';

const router = Router();

router.get('/:id', protectRoute, getMessage);
router.post('/send/:id', protectRoute, sendMessage);

export default router;

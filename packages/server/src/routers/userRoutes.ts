import { Router } from 'express';

import { protectRoute } from '../middleware/protectRoute.ts';
import { getUpdateUser, getSearchUsers, addUserToChatList } from '../controllers/userController.ts';

const router = Router();

router.get('/update-user', protectRoute, getUpdateUser);
router.get('/search-users', protectRoute, getSearchUsers);
router.get('/chat-list/:userId', protectRoute, addUserToChatList);

export default router;

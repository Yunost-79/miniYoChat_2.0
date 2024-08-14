import { Router } from 'express';

import { protectRoute } from '../middleware/protectRoute.ts';
import {
  getUsersChatList,
  getUpdateUser,
  getSearchUsers,
  addConversationToUser,
} from '../controllers/userController.ts';

const router = Router();

// router.get('/', protectRoute, getUsersForSidebar);
router.get('/chat-list', protectRoute, getUsersChatList);
router.get('/update-user', protectRoute, getUpdateUser);
router.get('/search-users', protectRoute, getSearchUsers);
router.get('/conversation-list/:userId', protectRoute, addConversationToUser);

export default router;

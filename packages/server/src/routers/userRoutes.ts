import { Router } from 'express';

import { protectRoute } from '../middleware/protectRoute.ts';
import {
  getUpdateUser,
  getUsersForSidebar,
  getSearchUsers,
  addConversationToUser,
} from '../controllers/userController.ts';

const router = Router();

router.get('/', protectRoute, getUsersForSidebar);
router.get('/update-user', protectRoute, getUpdateUser);
router.get('/search-users', protectRoute, getSearchUsers);
router.get('/conversation-list/:userId', protectRoute, addConversationToUser);

export default router;

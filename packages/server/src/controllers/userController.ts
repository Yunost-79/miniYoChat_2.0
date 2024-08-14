import { Request, Response } from 'express';

import User from '../models/userModel.ts';

import { EStatusCodes } from '../types/Enum.ts';
import Message from '../models/messageModel.ts';

// export const getUsersForSidebar = async (req: Request, res: Response) => {
//   try {
//     if (!req.user) {
//       return res.status(EStatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized' });
//     }
//     const loggedInUserId = req.user._id;
//     const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');

//     res.status(EStatusCodes.OK).json(filteredUsers);
//   } catch (e) {
//     const err = e as Error;

//     console.log('Error in getUsersForSidebar  controller', err.message);
//     res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
//   }
// };

export const getUsersChatList = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    const err = e as Error;
    console.error('Error in getUsersChatList controller:', err.message);
    res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

export const getUpdateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(EStatusCodes.UNAUTHORIZED).json({ error: 'User is not authenticated' });
    }

    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(EStatusCodes.NOT_FOUNDS).json({ error: 'User not found' });
    }

    return res.status(EStatusCodes.OK).json(user);
  } catch (e) {
    const err = e as Error;
    console.error('Error in getCurrentUser controller:', err.message);
    return res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

export const getSearchUsers = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;

    if (!query) {
      return res.status(EStatusCodes.BAD_REQUEST).json({ error: 'Search query is required' });
    }

    const result = await User.find({ username: { $regex: query, $options: 'i' } });

    return res.status(EStatusCodes.OK).json(result);
  } catch (e) {
    const err = e as Error;
    console.error('Error in getSearchUsers controller:', err.message);
    return res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

export const addConversationToUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(EStatusCodes.BAD_REQUEST).json({ error: 'User ID is required' });
    }

    const user = await User.findById(userId).select('-password -email -createdAt -updatedAt');

    console.log(user);

    if (!user) {
      return res.status(EStatusCodes.NOT_FOUNDS).json({ error: 'User not found' });
    }

    const userMessages = await Message.find({ receiverId: userId });

    if (userMessages.length === 0) {
      return res.status(EStatusCodes.OK).json({ message: `New chat with: ${user.username}` });
    }

    const userLastMessage = userMessages[userMessages.length - 1];

    const currentUser = req.user;

    if (!currentUser) {
      return res.status(EStatusCodes.UNAUTHORIZED).json({ error: 'User is not authenticated' });
    }

    const updateCurrentUser = await User.findById(currentUser._id).select('-password');

    if (!updateCurrentUser) {
      return res.status(EStatusCodes.NOT_FOUNDS).json({ error: 'Current user not found' });
    }

    const existingConversation = updateCurrentUser.conversationList.find(
      (conversation) => conversation.username === user.username
    );

    if (existingConversation) {
      existingConversation.lastMessage = userLastMessage.message || '';
      existingConversation.profileAvatar = user.profileAvatar || '';
    } else {
      updateCurrentUser.conversationList.push({
        username: user.username,
        profileAvatar: user.profileAvatar || '',
        lastMessage: userLastMessage.message || '',
      });
    }

    await updateCurrentUser.save();

    console.log(updateCurrentUser);

    return res.status(EStatusCodes.OK).json(updateCurrentUser);
  } catch (e) {
    const err = e as Error;
    console.error('Error in addConversationToUser controller:', err.message);
    return res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

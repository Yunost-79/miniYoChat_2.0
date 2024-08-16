import { Request, Response } from 'express';
import { Types } from 'mongoose';

import User from '../models/userModel.ts';

import { EStatusCodes } from '../types/Enum.ts';
import Message from '../models/messageModel.ts';
import Conversation from '../models/conversationModel.ts';
// import { addOnlineUser } from '../socket/socket.ts';

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

      // addOnlineUser(userId);
 

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
    const currentUser = req.user;

    if (!query) {
      return res.status(EStatusCodes.BAD_REQUEST).json({ error: 'Search query is required' });
    }

    if (!currentUser) {
      return res.status(EStatusCodes.UNAUTHORIZED).json({ error: 'User is not authenticated' });
    }

    let conversationUserIds: string[] = [];
    if (currentUser.conversationList && currentUser.conversationList.length > 0) {
      conversationUserIds = currentUser.conversationList.map(
        (conversation: { _id: string }) => conversation._id
      );
    }

    // Find users matching the search query, excluding those in the conversation list
    const result = await User.find({
      username: { $regex: query, $options: 'i' },
      _id: { $ne: currentUser._id, $nin: conversationUserIds }, // Exclude users already in conversation list
    });

    return res.status(EStatusCodes.OK).json(result);
  } catch (e) {
    const err = e as Error;
    console.error('Error in getSearchUsers controller:', err.message);
    return res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

export const addUserToChatList = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const currentUser = req.user;

    if (!userId) {
      return res.status(EStatusCodes.BAD_REQUEST).json({ error: 'User ID is required' });
    }

    if (!currentUser) {
      return res.status(EStatusCodes.UNAUTHORIZED).json({ error: 'User is not authenticated' });
    }

    const receiverObjectId = currentUser._id;
    const senderObjectId = new Types.ObjectId(userId);

    let conversation = await Conversation.findOne({
      participants: { $all: [receiverObjectId, senderObjectId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [receiverObjectId, senderObjectId],
      });
    }

    // Check if there are any messages in the conversation
    const lastMessageObjectId =
      conversation.messages.length > 0
        ? conversation.messages[conversation.messages.length - 1]
        : null;

    let lastMessageContent = '';

    if (lastMessageObjectId) {
      const userLastMessage = await Message.findOne({ _id: lastMessageObjectId });

      if (userLastMessage) {
        lastMessageContent = userLastMessage.message;
      }
    }

    const user = await User.findById(userId).select('-password -email -createdAt -updatedAt');

    if (!user) {
      return res.status(EStatusCodes.NOT_FOUNDS).json({ error: 'User not found' });
    }

    const existingConversationIndex = currentUser.conversationList.findIndex(
      (conversation: { _id: { toString: () => string } }) =>
        conversation._id.toString() === user._id.toString()
    );

    if (existingConversationIndex !== -1) {
      currentUser.conversationList[existingConversationIndex].lastMessage = lastMessageContent;
    } else {
      const newUser = {
        _id: user._id,
        username: user.username,
        profileAvatar: user.profileAvatar,
        lastMessage: lastMessageContent,
      };
      currentUser.conversationList.push(newUser);
    }

    await currentUser.save();

    return res.status(EStatusCodes.OK).json(currentUser);
  } catch (e) {
    const err = e as Error;
    console.error('Error in addUserToChatList controller:', err.message);
    return res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

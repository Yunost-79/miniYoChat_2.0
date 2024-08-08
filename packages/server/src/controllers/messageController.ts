import { Request, Response } from 'express';

import Conversation from '../models/conversationModel';
import Message from '../models/messageModel.ts';

import { EStatusCodes } from '../types/Enum.ts';

interface SendMessageRequest extends Request {
  body: {
    message: string;
  };
}

export const sendMessage = async (req: SendMessageRequest, res: Response) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;

    if (!req.user) {
      return res.status(EStatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized' });
    }

    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    await Promise.all([newMessage.save(), conversation.updateOne({ $push: { messages: newMessage._id } })]);
    res.status(EStatusCodes.OK).json(newMessage);
  } catch (e) {
    const err = e as Error;

    console.log('Error in sendMessage controller', err.message);
    res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};
export const getMessage = async (req: Request, res: Response) => {
  try {
    const { id: userToChatId } = req.params;

    if (!req.user) {
      return res.status(EStatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized' });
    }
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages');

    if (!conversation) return res.status(EStatusCodes.OK).json([]);

    const messages = conversation?.messages;

    res.status(EStatusCodes.OK).json(messages);
  } catch (e) {
    const err = e as Error;

    console.log('Error in getMessage controller', err.message);
    res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

import { Request, Response } from 'express';

import User from '../models/userModel.ts';

import { EStatusCodes } from '../types/Enum.ts';

export const getUsersForSidebar = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(EStatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized' });
    }
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');

    res.status(EStatusCodes.OK).json(filteredUsers);
  } catch (e) {
    const err = e as Error;

    console.log('Error in getUsersForSidebar  controller', err.message);
    res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

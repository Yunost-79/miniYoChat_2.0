import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import User from '../models/userModel.ts';
import generateTokenAndSetCookie from '../token/generateTokenAndSetCookie.ts';
import { EStatusCodes } from '../types/Enum.ts';

type TypedRequestBody<T> = Request<{}, {}, T>;

interface RequestBody {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  profileAvatar: string;
}

//Sign Up controller

export const signup = async (req: TypedRequestBody<RequestBody>, res: Response) => {
  try {
    const { email, username, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(EStatusCodes.BAD_REQUEST).json({ error: "Passwords don't match" });
    }

    const currentUser = await User.findOne({ username });

    if (currentUser) {
      return res.status(EStatusCodes.BAD_REQUEST).json({ error: 'Username already exists' });
    }
    const currentEmail = await User.findOne({ email });

    if (currentEmail) {
      return res.status(EStatusCodes.BAD_REQUEST).json({ error: 'Email already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const avatarColor = 'random';
    const avatarSize = 128;

    const profileAvatar = `https://ui-avatars.com/api/?name=${username}&background=${avatarColor}&size=${avatarSize}`;

    const newUser = new User({
      email,
      username,
      password: hashedPassword,
      profileAvatar,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(EStatusCodes.CREATED).json({
        _id: newUser._id,
        email: newUser.email,
        username: newUser.username,
        profileAvatar: newUser.profileAvatar,
      });
    } else {
      res.status(EStatusCodes.BAD_REQUEST).json({ error: 'Invalid user data' });
    }
  } catch (e) {
    const err = e as Error;

    console.log('Error in signup controller', err.message);
    res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

//Login controller

export const login = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;

    const currentUser = await User.findOne({ username });
    const currentEmail = await User.findOne({ email });

    if (!currentUser || !currentEmail) {
      return res.status(EStatusCodes.BAD_REQUEST).json({ error: 'Invalid username or email' });
    }
    const isCorrectPassword = await bcrypt.compare(password, currentUser.password || '');
    if (!isCorrectPassword) {
      return res.status(EStatusCodes.BAD_REQUEST).json({ error: 'Invalid password' });
    }

    generateTokenAndSetCookie(currentUser._id, res);

    res.status(EStatusCodes.OK).json({
      _id: currentUser._id,
      username: currentUser.username,
      email: currentUser.email,
      profileAvatar: currentUser.profileAvatar,
    });
  } catch (e) {
    const err = e as Error;

    console.log('Error in login controller', err.message);
    res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

//Logout controller

export const logout = (req: Request, res: Response) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(EStatusCodes.OK).json({ message: 'Logged out successfully' });
  } catch (e) {
    const err = e as Error;

    console.log('Error in logout controller', err.message);
    res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

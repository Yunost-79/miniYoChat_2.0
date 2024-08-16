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
  rePassword: string;
  profileAvatar: string;
}

//Sign Up controller

export const signup = async (req: TypedRequestBody<RequestBody>, res: Response) => {
  try {
    const { email, username, password, rePassword } = req.body;

    if (password !== rePassword) {
      return res.status(EStatusCodes.BAD_REQUEST).json({ error: "Passwords don't match" });
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      if (existingUser.username === username) {
        console.log('existingUser.username === username', existingUser.username === username);

        return res
          .status(EStatusCodes.BAD_REQUEST)
          .json({ error: { type: 'username', text: 'Username already exists' } });
      } else {
        return res
          .status(EStatusCodes.BAD_REQUEST)
          .json({ error: { type: 'email', text: 'Email already exists' } });
      }
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

    await newUser.save();

    generateTokenAndSetCookie(newUser._id, res);

    return res.status(EStatusCodes.CREATED).json({
      _id: newUser._id,
      email: newUser.email,
      username: newUser.username,
      profileAvatar: newUser.profileAvatar,
    });
  } catch (e) {
    const err = e as Error;
    console.error('Error in signup controller:', err.message);
    return res.status(EStatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
  }
};

//Login controller

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const currentUser = await User.findOne({ username });

    if (!currentUser) {
      return res
        .status(EStatusCodes.BAD_REQUEST)
        .json({ error: { type: 'username', text: 'User with this username not found' } });
    }
    const isCorrectPassword = await bcrypt.compare(password, currentUser.password || '');

    if (!isCorrectPassword) {
      return res
        .status(EStatusCodes.BAD_REQUEST)
        .json({ error: { type: 'password', text: 'Incorrect password' } });
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

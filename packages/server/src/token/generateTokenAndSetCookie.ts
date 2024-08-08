import { Response } from 'express';
import { ObjectId } from 'mongodb';

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
// const NODE_JWT = process.env.NODE_ENV as string;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

const generateTokenAndSetCookie = (userId: ObjectId, res: Response) => {
  const token: string = jwt.sign({ userId }, JWT_SECRET as jwt.Secret, {
    expiresIn: '15d',
  });

  const days = 30;

  res.cookie('jwt', token, {
    maxAge: days * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'strict',
    // secure: NODE_JWT !== 'development',
  });
};

export default generateTokenAndSetCookie;

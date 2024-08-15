// src/types/express.d.ts

import { IUser } from '../models/userModel'; // Adjust the path according to your project structure

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

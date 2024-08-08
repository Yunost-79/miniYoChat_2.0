import { Schema, model } from 'mongoose';
import { EModels } from '../types/Enum.ts';

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    profileAvatar: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const User = model(EModels.name.Users, userSchema);

export default User;

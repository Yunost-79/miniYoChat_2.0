import { Schema, model } from 'mongoose';

const searchUserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model('SearchUsers', searchUserSchema);

export default User;

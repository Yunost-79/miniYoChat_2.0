import { Schema, model } from 'mongoose';

const chatListItem = new Schema({
  username: {
    type: String,
    require: true,
  },
  profileAvatar: {
    type: String,
    require: true,
  },
  lastMessage: {
    type: String,
    require: true,
  },
});

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

    conversationList: [chatListItem],
  },
  { timestamps: true }
);

const User = model('Users', userSchema);

export default User;

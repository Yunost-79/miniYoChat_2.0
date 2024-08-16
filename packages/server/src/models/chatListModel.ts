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
})

const chatListSchema = new Schema(
  {
   chatList: [chatListItem]
  },
  { timestamps: true }
);

const ChatList = model('ChatList', chatListSchema);

export default ChatList;

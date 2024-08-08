import { Schema, model, Types } from 'mongoose';
import { EModels } from '../types/Enum.ts';

const messageSchema = new Schema(
  {
    senderId: {
      type: Types.ObjectId,
      ref: EModels.ref.User,
      required: true,
    },
    receiverId: {
      type: Types.ObjectId,
      ref: EModels.ref.User,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = model(EModels.name.Message, messageSchema);

export default Message;

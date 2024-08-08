import { Schema, model, Types } from 'mongoose';
import { EModels } from '../types/Enum.ts';

const conversationSchema = new Schema(
  {
    participants: [
      {
        type: Types.ObjectId,
        ref: EModels.ref.User,
      },
    ],
    messages: [
      {
        type: Types.ObjectId,
        ref: EModels.ref.Message,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Conversation = model(EModels.name.Conversation, conversationSchema);

export default Conversation;

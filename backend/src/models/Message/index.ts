import { model, Schema } from 'mongoose';
import { MessageInterface } from './Message';

const messageSchema = new Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  seen: {
    type: Boolean,
    required: true,
    default: false,
  },
  seenAt: {
    type: Date || undefined,
  },
});

export default model<MessageInterface>('Message', messageSchema);

import { Document } from 'mongoose';

export interface MessageInterface extends Document {
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: Date;
  seen: boolean;
  seenAt: Date;
}

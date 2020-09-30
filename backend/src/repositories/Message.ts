import Message from '@model/Message';
import { MessageInterface } from '@model/Message/Message';
import { BaseRepository } from './Base';
import { Injectable } from '@decorator/class';
import { Dictionary } from '../utils/genericTypes';

interface PostBodyMessage {
  senderId: string;
  receiverId: string;
  message: string;
  seen: boolean;
  seenAt: Date | undefined;
}

@Injectable()
export class MessageRepository extends BaseRepository {
  constructor() {
    super();
  }

  createMessage(data: PostBodyMessage): MessageInterface {
    return super.createModelInstance<Dictionary, MessageInterface>(Message, {
      ...data,
      createdAt: new Date(),
    });
  }

  getMessages(
    currentUserId: string,
    otherUserId: string,
    skip = 0,
    limit = 10
  ) {
    return Message.find(
      {
        $or: [
          { senderId: currentUserId, receiverId: otherUserId },
          { senderId: otherUserId, receiverId: currentUserId },
        ],
      },
      null,
      { skip, limit, sort: { createdAt: -1 } }
    ).populate('senderId', 'name picture _id');
  }

  populateMessage(id: string) {
    return Message.findById(id).populate('senderId', 'name picture _id');
  }
}

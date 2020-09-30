import { Injectable } from '@decorator/class';
import { MessageRepository } from '@repository/Message';
import {
  SocketController,
  OnMessage,
  Payload,
  SocketIO,
  SocketID,
  SocketQueryParam,
  ConnectedSocket,
} from '@socket';
import { socketM } from '@middleware/socket';
import { Server, Socket } from 'socket.io';

interface PostBodyMessage {
  socketId?: string;
  receiverId: string;
  message: string;
}

@Injectable()
@SocketController('')
export class MessageController {
  constructor(private readonly messageRepository: MessageRepository) {}

  @OnMessage('get-messages')
  async messages(
    @Payload() otherUserId: string,
    @SocketIO() io: Server,
    @SocketID() id: string,
    @SocketQueryParam('id') userId: string
  ) {
    const messages = await this.messageRepository.getMessages(
      userId,
      otherUserId
    );
    return io.to(id).emit('messages', messages);
  }

  @OnMessage('send-message', socketM)
  async message(
    @Payload() body: PostBodyMessage,
    @SocketIO() io: Server,
    @SocketQueryParam('id') senderId: string,
    @ConnectedSocket() socket: Socket
  ) {
    const socketId = String(body.socketId);
    const postData = {
      ...body,
      senderId,
      seen: !!body.socketId,
      seenAt: body.socketId ? new Date() : undefined,
    };
    delete postData.socketId;
    const m = await this.messageRepository.createMessage(postData).save();
    const message = await this.messageRepository.populateMessage(m._id);
    if (socketId) {
      io.to(socketId).emit('receive-message', message);
    }

    return socket.emit('receive-message', message);
  }

  @OnMessage('user-typing')
  typing(
    @Payload() { typing, socketId }: { typing: boolean; socketId: string },
    @SocketIO() io: Server,
    @SocketQueryParam('id') senderId: string
  ) {
    return io.to(socketId).emit('is-typing', { typing, senderId });
  }

  @OnMessage('load-more')
  async loadMore(
    @SocketIO() io: Server,
    @SocketID() id: string,
    @SocketQueryParam('id') senderId: string,
    @Payload() { skip, userId }: { skip: number; userId: string }
  ) {
    const messages = await this.messageRepository.getMessages(
      senderId,
      userId,
      skip
    );
    return io.to(id).emit('loaded-more', messages);
  }
}

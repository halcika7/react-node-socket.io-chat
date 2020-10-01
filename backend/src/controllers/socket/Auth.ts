import { Injectable } from '@decorator/class';
import { UserRepository } from '@repository/User';
import {
  SocketController,
  OnConnect,
  OnMessage,
  Payload,
  ConnectedSocket,
  SocketIO,
  SocketID,
  SocketQueryParam,
} from '@socket';
import { Socket, Server } from 'socket.io';
import { socketM } from '@middleware/socket';

@Injectable()
@SocketController('')
export class AuthSocketController {
  constructor(private readonly userRepository: UserRepository) {}

  @OnConnect('connection')
  async connection(
    @SocketIO() io: Server,
    @SocketID() id: string,
    @SocketQueryParam('id') userId: string,
    @ConnectedSocket() socket: Socket
  ) {
    const [allUsers, user] = await Promise.all([
      this.userRepository.getAll(userId),
      this.userRepository.findById(userId),
    ]);
    socket.broadcast.emit('user-logged', { ...user, socketId: id });
    return io.to(id).emit('users', { users: [...allUsers] });
  }

  @OnMessage('logout', socketM)
  logout(
    @SocketQueryParam('id') id: string,
    @ConnectedSocket() socket: Socket
  ) {
    return socket.broadcast.emit('logout', id);
  }

  @OnMessage('im-online-too', socketM)
  async imOnlineToo(
    @SocketQueryParam('id') userId: string,
    @SocketIO() io: Server,
    @SocketID() id: string,
    @Payload() otherUserSocketId: string
  ) {
    return io
      .to(otherUserSocketId)
      .emit('im-online-too', { userId, socketId: id });
  }
}

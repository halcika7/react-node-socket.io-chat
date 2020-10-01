import { UnauthorizedException } from '@exceptions';
import { Socket, Server } from 'socket.io';
import { JWTService } from '@service/JWT';

export const socketM = async (io: Server, socket: Socket, next: Function) => {
  try {
    const jwt = JWTService;
    const { token } = socket.handshake.query;
    if (!token) {
      throw new UnauthorizedException();
    }
    await jwt.verifyToken(token, false);
  } catch {
    io.to(socket.id).emit('Authorization-Error', 'Authorization');
  }
  try {
    next();
  } catch (error) {
    io.to(socket.id).emit('err', error.message);
  }
};

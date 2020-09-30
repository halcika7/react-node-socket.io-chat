import { Socket, Server } from 'socket.io';

export const socketM = (io: Server, socket: Socket, next: Function) => {
  try {
    next();
  } catch (error) {
    io.to(socket.id).emit('err', error.message);
  }
};

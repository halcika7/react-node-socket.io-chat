import { UserRepository } from '@repository/User';
import { Socket, Server } from 'socket.io';
export declare class AuthSocketController {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    connection(io: Server, id: string, userId: string, socket: Socket): Promise<boolean>;
    logout(id: string, socket: Socket): boolean;
    imOnlineToo(userId: string, io: Server, id: string, otherUserSocketId: string): Promise<boolean>;
}

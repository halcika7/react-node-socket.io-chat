import { MessageRepository } from '@repository/Message';
import { Server, Socket } from 'socket.io';
interface PostBodyMessage {
    socketId?: string;
    receiverId: string;
    message: string;
}
export declare class MessageController {
    private readonly messageRepository;
    constructor(messageRepository: MessageRepository);
    messages(otherUserId: string, io: Server, id: string, userId: string): Promise<boolean>;
    message(body: PostBodyMessage, io: Server, senderId: string, socket: Socket): Promise<boolean>;
    typing({ typing, socketId }: {
        typing: boolean;
        socketId: string;
    }, io: Server, senderId: string): boolean;
    loadMore(io: Server, id: string, senderId: string, { skip, userId }: {
        skip: number;
        userId: string;
    }): Promise<boolean>;
}
export {};

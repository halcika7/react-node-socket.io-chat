/// <reference types="mongoose" />
import { MessageInterface } from '@model/Message/Message';
import { BaseRepository } from './Base';
interface PostBodyMessage {
    senderId: string;
    receiverId: string;
    message: string;
    seen: boolean;
    seenAt: Date | undefined;
}
export declare class MessageRepository extends BaseRepository {
    constructor();
    createMessage(data: PostBodyMessage): MessageInterface;
    getMessages(currentUserId: string, otherUserId: string, skip?: number, limit?: number): import("mongoose").DocumentQuery<MessageInterface[], MessageInterface, {}>;
    populateMessage(id: string): import("mongoose").DocumentQuery<MessageInterface | null, MessageInterface, {}>;
}
export {};

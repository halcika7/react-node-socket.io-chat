export interface User {
  _id: string;
  name: string;
  picture: string;
  socketId?: string;
}

export interface UpdateUser {
  userId: string;
  socketId: string;
}

export interface Message {
  senderId: {
    picture: string;
    _id: string;
    name: string;
  };
  receiverId: string;
  message: string;
  seen: boolean;
  seenAt: Date | undefined;
  createdAt: Date;
  _id: string;
}

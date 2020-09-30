import { MessagesActionTypes, MessagesActions } from '../types/mesages';
import { Message } from '../../lib/customTypes';

export const setMessages = (messages: Message[] | null): MessagesActionTypes => ({
  type: MessagesActions.SET_MESSAGES,
  payload: { messages },
});

export const addMessage = (message: Message): MessagesActionTypes => ({
  type: MessagesActions.ADD_MESSAGE,
  payload: { message },
});

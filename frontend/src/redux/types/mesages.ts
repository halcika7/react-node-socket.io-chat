import { Message } from '../../lib/customTypes';

export enum MessagesActions {
  SET_MESSAGES = 'SET_MESSAGES',
  ADD_MESSAGE = 'ADD_MESSAGE'
}

interface SetMessages {
  type: typeof MessagesActions.SET_MESSAGES;
  payload: { messages: Message[] | null };
}

interface AddMessage {
  type: typeof MessagesActions.ADD_MESSAGE;
  payload: { message: Message };
}

export type MessagesActionTypes = SetMessages | AddMessage;

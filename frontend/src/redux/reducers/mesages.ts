import { MessagesActionTypes, MessagesActions } from '../types/mesages';
import { Message } from '../../lib/customTypes';

export interface MessagesState {
  messages: Message[] | null;
  loading: boolean;
}

export const INITIAL_STATE: MessagesState = {
  messages: null,
  loading: true,
};

export function MessagesReducer(
  prevState = INITIAL_STATE,
  action: MessagesActionTypes
) {
  switch (action.type) {
    case MessagesActions.SET_MESSAGES:
      return { ...prevState, messages: action.payload.messages, loading: action.payload.messages ? false : true };
    case MessagesActions.ADD_MESSAGE: {
      const { message } = action.payload;
      return {
        ...prevState,
        messages: prevState.messages
          ? [...prevState.messages, message]
          : [message],
      };
    }
    default:
      return prevState;
  }
}

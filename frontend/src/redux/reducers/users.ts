import { UsersActionTypes, UsersActions } from '../types/users';
import { User } from '../../lib/customTypes';

export interface UsersState {
  users: User[];
  selectedUser: User | undefined;
}

export const INITIAL_STATE: UsersState = {
  users: [],
  selectedUser: undefined,
};

export function UsersReducer(
  prevState = INITIAL_STATE,
  action: UsersActionTypes
) {
  switch (action.type) {
    case UsersActions.SET_USERS:
      return { ...prevState, users: action.payload.users };
    case UsersActions.SET_SELECTED_USER: {
      const { id } = action.payload;
      if (!id) {
        return { ...prevState, selectedUser: undefined };
      }
      const selectedUser = prevState.users.find(user => user._id === id);
      return { ...prevState, selectedUser };
    }
    case UsersActions.UPDATE_OR_ADD: {
      const users = [...prevState.users];
      const { user, id, socketId } = action.payload;
      if (id) {
        const index = users.findIndex(u => u._id === id);
        users[index] = { ...users[index], socketId };
        return { ...prevState, users };
      }
      const us = user as User;
      if (us._id) {
        const index = users.findIndex(u => u._id === us._id);
        if (index === -1) {
          users.push(us);
        } else {
          users[index] = { ...us };
        }
        return { ...prevState, users };
      }
      users.push(user as User);
      return { ...prevState, users };
    }
    default:
      return prevState;
  }
}

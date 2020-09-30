import { UsersActions, UsersActionTypes } from '../types/users';
import { User } from '../../lib/customTypes';

export const setUsers = (users: User[]): UsersActionTypes => ({
  type: UsersActions.SET_USERS,
  payload: { users },
});

export const setSelectedUser = (id?: string): UsersActionTypes => ({
  type: UsersActions.SET_SELECTED_USER,
  payload: { id },
});

export const updateOrAdd = (
  user = {},
  id = '',
  socketId = undefined
): UsersActionTypes => ({
  type: UsersActions.UPDATE_OR_ADD,
  payload: { user, id, socketId },
});

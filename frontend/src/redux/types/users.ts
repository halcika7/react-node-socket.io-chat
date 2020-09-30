import { User } from '../../lib/customTypes';

export enum UsersActions {
  SET_USERS = 'SET_USERS',
  SET_SELECTED_USER = 'SET_SELECTED_USER',
  UPDATE_OR_ADD = 'UPDATE_OR_ADD',
}

interface SetUsers {
  type: typeof UsersActions.SET_USERS;
  payload: { users: User[] };
}

interface SetSelectedUser {
  type: typeof UsersActions.SET_SELECTED_USER;
  payload: { id?: string };
}

interface UpdateOrAdd {
  type: typeof UsersActions.UPDATE_OR_ADD;
  payload: { user: User | {}, id?:string, socketId?: undefined };
}

export type UsersActionTypes = SetUsers | SetSelectedUser | UpdateOrAdd;

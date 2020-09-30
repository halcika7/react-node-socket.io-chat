import { combineReducers, Reducer } from 'redux';

// reducers
import { AuthReducer as auth, AuthState } from './auth';
import { UsersReducer as users, UsersState } from './users';
import { MessagesReducer as messages, MessagesState } from './mesages';

export interface AppState {
  auth: AuthState;
  users: UsersState;
  messages: MessagesState;
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  auth,
  users,
  messages
});

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Messages from './Messages';
import Users from './Users';
import { useSocket } from '../lib/SocketProvider';
import { useThunkDispatch } from '../redux/AppThunkDispatch';
import {
  logoutUser,
  setUsers,
  updateOrAdd,
  setSelectedUser,
  setMessages,
} from '../redux/actions';
import { User, UpdateUser } from '../lib/customTypes';
import { createSelector } from 'reselect';
import { AppState } from '../redux/reducers/index';
import { useSelector } from 'react-redux';
import { Route, useLocation, useHistory } from 'react-router';

const Container = styled.section`
  margin: 0 auto;
  max-width: 750px;
  background: #444753;
  border-radius: 5px;
  display: flex;
`;

const reduxProps = createSelector(
  (state: AppState) => state.users.users,
  (state: AppState) => state.users.selectedUser,
  (users, selectedUser) => ({ users, selectedUser })
);

const Home = () => {
  const params = useLocation();
  const history = useHistory();
  const id = params.pathname.split('/')[1];
  const dispatch = useThunkDispatch();
  const { users, selectedUser } = useSelector(reduxProps);
  const client = useSocket() as SocketIOClient.Socket;
  const [otherOnline, setOtherOnline] = useState<UpdateUser[]>([]);
  const ref = useRef<string | null>(null);
  ref.current = id;

  const logout = () => {
    if (client) client.emit('logout');
    dispatch(logoutUser);
  };

  useEffect(() => {
    if (!client) return;

    client.on('users', (data: { users: User[] }) =>
      dispatch(setUsers(data.users))
    );

    client.on('logout', (id: string) =>
      dispatch(updateOrAdd({}, id, undefined))
    );

    client.on('user-logged', (user: User) => {
      dispatch(updateOrAdd(user));
      client.emit('im-online-too', user.socketId);
    });

    client.on('im-online-too', ({ userId, socketId }: UpdateUser) => {
      setOtherOnline(prev => [...prev, { userId, socketId }]);
    });

    return () => {
      client.off('users');
      client.off('logout');
      client.off('user-logged');
      client.off('im-online-too');
      client.close();
    };
  }, [client, dispatch]);

  useEffect(() => {
    if (users.length && otherOnline.length) {
      const newUsers = users.map(user => {
        const toUpdate = otherOnline.find(other => other.userId === user._id);
        if (toUpdate) {
          return { ...user, socketId: toUpdate.socketId };
        }
        return user;
      });
      dispatch(setUsers(newUsers));
      setOtherOnline([]);
    }
  }, [users, otherOnline, dispatch]);

  useEffect(() => {
    if(!id && users.length) {
      history.push(`/${users[0]._id}`)
    }
    if (id && users.length) {
      if (ref.current !== id) {
        dispatch(setSelectedUser());
        dispatch(setMessages([]));
        ref.current = id;
      }
      dispatch(setSelectedUser(id));
    }
  }, [dispatch, id, users, history]);

  return (
    <>
      <button onClick={logout}>Logout</button>
      <Container className="clearfix">
        <Users users={users} />
        {selectedUser && (
          <Route path="/:id">
            <Messages client={client} id={id} />
          </Route>
        )}
      </Container>
    </>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { useThunkDispatch } from './redux/AppThunkDispatch';
import { refreshToken } from './redux/actions';
import Home from './components/Home';
import Login from './components/Login';
import Spinner from './components/Spinner';
import { createSelector } from 'reselect';
import { AppState } from './redux/reducers/index';
import { useSelector } from 'react-redux';
import { SocketProvider } from './lib/SocketProvider';

import './App.css';

const reduxProps = createSelector(
  (state: AppState) => state.auth.authLoading,
  (state: AppState) => state.auth.isAuthenticated,
  (state: AppState) => state.auth.id,
  (loading, isAuthenticated, id) => ({ loading, isAuthenticated, id })
);

function App() {
  const dispatch = useThunkDispatch();
  const { isAuthenticated, loading, id } = useSelector(reduxProps);

  useEffect(() => {
    dispatch(refreshToken);
  }, [dispatch]);

  if (loading) return <Spinner />;

  if (isAuthenticated)
    return (
      <SocketProvider id={id as string}>
        <Home />
      </SocketProvider>
    );

  return <Login />;
}

export default App;

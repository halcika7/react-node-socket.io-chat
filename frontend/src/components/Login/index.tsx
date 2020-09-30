import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useThunkDispatch } from '../../redux/AppThunkDispatch';
import { authSuccess } from '../../redux/actions';

import './index.css';
import img from './bg-01.jpg';
import Buttons from './Buttons';

const Login = () => {
  const location = useLocation();
  const dispatch = useThunkDispatch();
  const history = useHistory();
  const token = new URLSearchParams(location.search).get('token');
  const error = new URLSearchParams(location.search).get('err');

  useEffect(() => {
    if (token) {
      dispatch(authSuccess(token));
      history.replace('/');
    }
    if (error) {
      history.replace('/');
    }
  }, [error, token, dispatch, history]);

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-form">
            <span className="login100-form-title p-b-34"> Account Login </span>
            <Buttons />
          </div>

          <div
            className="login100-more"
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

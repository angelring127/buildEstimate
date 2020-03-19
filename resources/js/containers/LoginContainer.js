/**
 * LoginContainer.js
 * 
 */
import React, {useEffect} from 'react';
import Login from '../components/Login';
import useBodyClass from '../common/useBodyClass';

const LoginContainer = () => {
  useBodyClass(['hold-transition', 'login-page']);
  return <Login />;
}

export default LoginContainer;
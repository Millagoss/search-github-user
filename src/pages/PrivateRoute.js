import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();

  const isUser = user && isAuthenticated;

  return isUser ? children : <Navigate to='/login' />;
};
export default PrivateRoute;

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Wrapper } from './styles/login.page.style';
import loginImg from '../images/login-img.svg';
const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className='container'>
        <img src={loginImg} alt='github user' />
        <h1>github user</h1>
        <button onClick={loginWithRedirect} className='btn'>
          login / sign up
        </button>
      </div>
    </Wrapper>
  );
};

export default Login;

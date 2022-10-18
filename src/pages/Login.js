import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Wrapper } from './styles/login.page.style';
import loginImg from '../images/login-img.svg';
const Login = () => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={loginImg} alt='github user' />
        <h1>github user</h1>
        <button className='btn'>login</button>
      </div>
    </Wrapper>
  );
};

export default Login;

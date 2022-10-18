import React from 'react';
import { GithubContext, useGlobalGithubContext } from '../context/context';

import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

import { Wrapper } from './styles/info.component.style';

const UserInfo = () => {
  const value = useGlobalGithubContext();
  return <h2>user info component</h2>;
};

export default UserInfo;

import React, {
  useState,
  useEffect,
  useContext,
  Children,
  createContext,
} from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const value = { ola: 'ola' };

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
};

export const useGlobalGithubContext = () => {
  return useContext(GithubContext);
};

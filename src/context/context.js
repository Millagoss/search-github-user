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
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);

  const value = {
    githubUser,
    setGithubUser,
    githubRepos,
    setGithubRepos,
    githubFollowers,
    setGithubFollowers,
  };

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
};

export const useGlobalGithubContext = () => {
  return useContext(GithubContext);
};

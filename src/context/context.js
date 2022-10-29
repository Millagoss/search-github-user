import React, { useState, useEffect, useContext, createContext } from 'react';
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
  const [requestLimit, setReaquestLimit] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        const {
          rate: { remaining, limit },
        } = data;
        setReaquestLimit({ limit, remaining });
        if (remaining === 0) {
          toggleError(
            true,
            'sorry, you have exceeded your hourly request limit'
          );
        }
      })
      .catch((error) => console.log(error));
  };

  function toggleError(show = false, msg = '') {
    setError({ show, msg });
  }

  useEffect(() => {
    checkRequests();
  }, [githubUser]);

  const fetchUser = async (userName) => {
    toggleError();
    setIsLoading(true);

    const userUrl = `${rootUrl}/users/${userName}`;
    const reposUrl = `${userUrl}/repos?per_page=100`;
    const followersUrl = `${userUrl}/followers`;

    const user = await axios(userUrl).catch((err) => console.log(err));

    if (user) {
      const repos = axios(reposUrl).catch((err) => console.log(err));
      const followers = axios(followersUrl).catch((err) => console.log(err));

      await Promise.allSettled([repos, followers])
        .then((results) => {
          const [repos, followers] = results;

          if (repos.status === 'fulfilled') {
            setGithubRepos(repos.value.data);
          }
          if (followers.status === 'fulfilled') {
            setGithubFollowers(followers.value.data);
          }

          setGithubUser(user.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      setIsLoading(false);
      toggleError(true, 'there is no user with that uesrname');
    }
  };

  const value = {
    githubUser,
    githubRepos,
    githubFollowers,
    fetchUser,
    requestLimit,
    error,
    isLoading,
  };

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
};

export const useGlobalGithubContext = () => {
  return useContext(GithubContext);
};

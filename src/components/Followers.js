import React from 'react';
import { GithubContext, useGlobalGithubContext } from '../context/context';

import { Wrapper } from './styles/followers.component.style';

const Followers = () => {
  const { githubFollowers } = useGlobalGithubContext();

  return (
    <Wrapper>
      <div className='followers'>
        {githubFollowers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Followers;

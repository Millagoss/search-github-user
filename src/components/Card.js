import React from 'react';
import { useGlobalGithubContext } from '../context/context';

import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

import { Wrapper } from './styles/user.component.style';

const Card = () => {
  const { githubUser } = useGlobalGithubContext();

  const {
    avatar_url,
    bio,
    html_url,
    name,
    company,
    blog,
    location,
    twitter_username,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || 'N/A'}</p>
        </div>
        <a href={html_url} target='blank'>
          follow
        </a>
      </header>
      <p className='bio'>{bio}</p>
      <div className='links'>
        <p>
          <MdBusiness />
          {company}
        </p>
        <p>
          <MdLocationOn />
          {location}
        </p>
        <a href={`https://${blog}`} target='blank'>
          <MdLink />
          {blog}
        </a>
      </div>
    </Wrapper>
  );
};

export default Card;

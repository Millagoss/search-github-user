import React from 'react';
import { GithubContext, useGlobalGithubContext } from '../context/context';

import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

import { Wrapper } from './styles/info.component.style';

const UserInfo = () => {
  const { githubUser } = useGlobalGithubContext();

  const { public_repos, followers, following, public_gists } = githubUser;

  const userInfo = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'following',
      value: following,
      color: 'puple',
    },
    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: 'gist',
      value: public_gists,
      color: 'yellow',
    },
  ];

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {userInfo.map((info) => {
          return <SingleInfo key={info.id} {...info} />;
        })}
      </Wrapper>
    </section>
  );
};

const SingleInfo = ({ icon, label, value, color }) => {
  return (
    <article className='item'>
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

export default UserInfo;

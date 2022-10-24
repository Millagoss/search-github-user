import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import { Spinner } from '../components/spinner';
import { GithubContext, useGlobalGithubContext } from '../context/context';

const Dashboard = () => {
  const { isLoading } = useGlobalGithubContext();

  return (
    <main>
      <Navbar />
      <Search />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Info />
          <User />
          <Repos />
        </>
      )}
    </main>
  );
};

export default Dashboard;

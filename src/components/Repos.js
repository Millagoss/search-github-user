import React from 'react';
import { GithubContext, useGlobalGithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

import { Wrapper } from './styles/repos.component.style';

const Repos = () => {
  const { githubRepos } = useGlobalGithubContext();

  const getInfo = githubRepos.reduce((total, curr) => {
    const { language } = curr;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});

  let chartInfo = Object.values(getInfo)
    .sort((a, b) => b.value - a.value)
    .slice(0, 4);

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={chartInfo} />
      </Wrapper>
    </section>
  );
};

export default Repos;

import React from 'react';
import { useGlobalGithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

import { Wrapper } from './styles/repos.component.style';

const Repos = () => {
  const { githubRepos } = useGlobalGithubContext();

  const getInfo = githubRepos.reduce((total, curr) => {
    const { language, stargazers_count } = curr;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, star: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        star: total[language].star + stargazers_count,
      };
    }
    return total;
  }, {});
  const mostUsed = Object.values(getInfo)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const mostPopular = Object.values(getInfo)
    .sort((a, b) => b.star - a.star)
    .slice(0, 5)
    .map((item) => {
      const { label, star } = item;
      return { label, value: star };
    });

  let { stars, forks } = githubRepos.reduce(
    (total, curr) => {
      const { stargazers_count, forks_count, name } = curr;
      total.stars.push({ label: name, value: stargazers_count });
      total.forks.push({ label: name, value: forks_count });
      return total;
    },
    {
      stars: [],
      forks: [],
    }
  );

  stars = stars.sort((a, b) => b.value - a.value).slice(0, 5);
  forks = forks.sort((a, b) => b.value - a.value).slice(0, 5);

  // const data = [
  //   { label: 'javascript', value: 49 },
  //   { label: 'CSS', value: 19 },
  //   { label: 'PHP', value: 89 },
  //   { label: 'Python', value: 89 },
  // ];

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

export default Repos;

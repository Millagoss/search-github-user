import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useGlobalGithubContext } from '../context/context';

import { Wrapper, ErrorWrapper } from './styles/search.component.style';

const Search = () => {
  const [user, setUser] = useState('');

  const { fetchUser, requestLimit, error } = useGlobalGithubContext();

  const { limit, remaining } = requestLimit;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      fetchUser(user);
    }
  };

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <MdSearch />
            <input
              type='text'
              placeholder='enter github user'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {remaining > 0 && <button type='submit'>search</button>}
          </div>
        </form>
        <h3>
          requests : {remaining || '60'} / {limit || '60'}
        </h3>
      </Wrapper>
    </section>
  );
};

export default Search;

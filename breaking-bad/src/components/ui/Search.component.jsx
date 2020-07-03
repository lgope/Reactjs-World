import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = query => {
    setText(query);
    getQuery(query);
  };
  return (
    <section className='search'>
      <form action=''>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters!'
          name='search_characters'
          id='search_characters'
          value={text}
          autoFocus
          onChange={e => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;

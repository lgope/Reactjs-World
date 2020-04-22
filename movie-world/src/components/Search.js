import React, { useState } from 'react';

function Search({ handleInput, searchText }) {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <section className='searchbox-wrap'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Search for a movie...'
          className='searchbox'
          //   onChange={handleInput}
          onChange={(e) => setText(e.target.value)}
          // onKeyPress={search}
        />
        <button className='' type='submit'>
          Search
        </button>
      </form>
    </section>
  );
}

export default Search;

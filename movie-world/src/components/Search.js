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
        {/* <input
          type='text'
          placeholder='Search for a movie...'
          className='searchbox'
          //   onChange={handleInput}
          onChange={(e) => setText(e.target.value)}
          // onKeyPress={search}
        />
        <button className='' type='submit'>
          Search
        </button> */}
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control searchbox'
            placeholder="Search for a movie..."
            aria-describedby='basic-addon2'
          onChange={(e) => setText(e.target.value)}
          />
          <div className='input-group-append'>
            <button className='btn btn-outline-primary' type='submit'>
              Search
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Search;

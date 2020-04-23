import React from 'react';

import Result from './Result.component';

function Results({ results, openPopup }) {
  // console.log(results);

  return (
    <section className='results'>
      {results.map((result) => (
        <Result key={result.imdbID} result={result} openPopup={openPopup} />
      ))}
    </section>
  );
}

export default Results;

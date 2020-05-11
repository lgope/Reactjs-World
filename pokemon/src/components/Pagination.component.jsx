import React from 'react';

const Pagination = ({ gotoNextPage, gotoPrevPage }) => (
  <div>
    {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
    {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
  </div>
);

export default Pagination;

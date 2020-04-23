import React, { useState, useEffect } from 'react';
import axios from 'axios';

import keys from './config/keys';
import Search from './components/Search.component';
import Results from './components/Results.component';
import Popup from './components/Popup.component';
import FooterPage from './components/Footer.component';

function App() {
  const [state, setState] = useState({
    results: [],
    // searchText: '',
    selected: {},
  });

  const [term, setTerm] = useState('avengers');
  // const [results, setResults] = useState([]);
  // const [selected, setSelected] = useState({});

  const apiurl = `https://www.omdbapi.com/?apikey=${keys.omdb_api_key}`;

  useEffect(() => {
    axios(`${apiurl}&s=${term}`).then(({ data }) => {
      const results = data.Search;

      setState((prevState) => {
        return { ...prevState, results: results };
      });

      // setResults((prevState) => {
      //   return { ...prevState, results: results };
      // });
    });
  }, [term]);

  const openPopup = (id) => {
    axios(`${apiurl}&i=${id}`).then(({ data }) => {
      let result = data;

      // console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });

      // setSelected((prevState) => {
      //   return { ...prevState, selected: result };
      // });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });

    // setSelected((prevState) => {
    //   return { ...prevState, selected: {} };
    // });
  };

  return (
    <div className='App'>
      <header>
        <h1>Movie World</h1>
      </header>
      <main>
        <Search searchText={(text) => setTerm(text)} />

        {state.results ? (
          <Results results={state.results} openPopup={openPopup} />
        ) : (
          <h2> No movies found with that name 😞. Try Different Please! </h2>
        )}

        {typeof state.selected.Title != 'undefined' ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
      {state.results ? (
        <FooterPage />
      ) : (
        <div className='fixed-bottom'>
          <FooterPage />
        </div>
      )}
    </div>
  );
}

export default App;

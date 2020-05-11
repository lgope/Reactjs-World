import React, { useState, useEffect, Fragment } from 'react';
import PokemonList from './components/PokemonList.componets';
import Pagination from './components/Pagination.component';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState(['']);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPageUrl, setNextPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [prevPageUrl, setPrevPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let cancel = '';
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemons(res.data.results.map(pokemon => pokemon.name));
      });

    return () => cancel();
  }, [currentPageUrl]);

  const gotoNextPage = () => setCurrentPageUrl(nextPageUrl);

  const gotoPrevPage = () => setCurrentPageUrl(prevPageUrl);

  if (loading) return 'Loading..';

  return (
    <Fragment>
      <PokemonList pokemons={pokemons} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </Fragment>
  );
}

export default App;

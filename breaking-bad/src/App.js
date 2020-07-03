import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/ui/Header.component';
import Search from './components/ui/Search.component';
import CharacterGrid from './components/characters/CharacterGrid.component';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={qu => setQuery(qu)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;

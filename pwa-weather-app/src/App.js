import React, { useState } from 'react';
import './App.css';
import WeatherBox from './components/weatherBox.component';

import { fetchWeatherData } from './api/fetchWeatherData';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async e => {
    if (e.key === 'Enter') {
      const data = await fetchWeatherData(query);

      setWeather(data);
      setQuery('');
    }
  };

  return (
    <div className='main-container'>
      <input
        type='text'
        className='search'
        placeholder='Search..'
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {weather.main && <WeatherBox weather={weather} />}

      {!weather ? <p className='city'>Not found 😞. Try another!</p> : ''}
    </div>
  );
}

export default App;

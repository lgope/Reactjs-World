import React from 'react';

const PokemonList = ({ pokemons }) => (
  <div>
    {pokemons.map(pokemon => (
      <div key={pokemon}>{pokemon}</div>
    ))}
  </div>
);

export default PokemonList;

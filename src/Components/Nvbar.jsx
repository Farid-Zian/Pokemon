import React from 'react';

function NavBar({ pokemonList, onPokemonClick }) {
  return (
    <div>
      <div>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => onPokemonClick(index)}>
            {pokemon.name}
          </button>
        ))}
      </div>
    </div>
  );
}
export default NavBar;

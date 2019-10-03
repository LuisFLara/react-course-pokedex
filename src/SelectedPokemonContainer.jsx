import React from 'react';
import SelectedPokemonImage from './SelectedPokemonImage';

const SelectedPokemonContainer = ( selectedPokemon ) => {
  return (
    <div className="selected-pokemon-container">
      <p><b>{selectedPokemon.selectedPokemon.id ? '#' : ''}{selectedPokemon.selectedPokemon.id} </b>{selectedPokemon.selectedPokemon.name}</p>
      <SelectedPokemonImage pokemonImagesUrls={selectedPokemon} />
    </div>
  );
}

export default SelectedPokemonContainer;
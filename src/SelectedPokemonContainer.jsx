import React from 'react';
import { get } from 'lodash';
import SelectedPokemonImage from './SelectedPokemonImage';

const SelectedPokemonContainer = ( selectedPokemon ) => {
  console.log(selectedPokemon);
  return (
    <div className="selected-pokemon-container">
      <p><b>{selectedPokemon.selectedPokemon.id ? '#' : ''}{selectedPokemon.selectedPokemon.id} </b>{selectedPokemon.selectedPokemon.name}</p>
      <SelectedPokemonImage pokemonImagesUrls={selectedPokemon.selectedPokemon} />
    </div>
  );
}

export default SelectedPokemonContainer;
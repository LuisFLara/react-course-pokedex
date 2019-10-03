import React from 'react';
import { get, forEach } from 'lodash';

const renderPokemonSprites = (urls) => {
  if(!urls) {
    return
  }
  let collection = [];
  forEach(urls, (element) => {
    collection.push(<img src={element} alt=""/>);
  });
  return collection;
}

const SelectedPokemonImage = (pokemonImagesUrls) => {
  return (
    <div>
      {renderPokemonSprites(get(pokemonImagesUrls, 'pokemonImagesUrls.selectedPokemon.sprites', ''))}
    </div>
  );
}

export default SelectedPokemonImage;
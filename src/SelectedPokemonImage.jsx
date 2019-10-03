import React from 'react';
import get from 'lodash';

const renderPokemonSprites = (urls) => {
  debugger;
  urls.forEach(element => {
    return <img src={element} alt=""/>
  });
}

const SelectedPokemonImage = (pokemonImagesUrls) => {
  return (
    <div>
      {pokemonImagesUrls ? renderPokemonSprites(get(pokemonImagesUrls, 'sprites')) : ''}
    </div>
  );
}

export default SelectedPokemonImage;
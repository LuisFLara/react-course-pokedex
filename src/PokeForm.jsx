import React from 'react';

const handleSubmit = (e, searchPokemon) => {
  searchPokemon(e.target.pokemon.value.toLowerCase());
  e.preventDefault();
}

const PokeForm = ({
  searchPokemon
}) =>{
  return(
    <form onSubmit={(e) => {handleSubmit(e, searchPokemon)}}>
      <input id="pokemon" />
      <input type="submit" />
    </form>
  );
}
export default PokeForm;
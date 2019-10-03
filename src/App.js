import React from 'react';
import './App.css';
import PokeApi from './services/pokemon';
import PokeForm from './PokeForm';
import SelectedPokemonContainer from './SelectedPokemonContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPokemon: {}
    };
    this.searchPokemon = this.searchPokemon.bind(this);

  }

  searchPokemon(pokemon){
    PokeApi.pokemon(pokemon).then((response) => {
      this.setState({ selectedPokemon: response.data });
    }).catch((error) => {
      alert("pokemon no encontrado");
      this.setState({ selectedPokemon: {} });
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Poke app</h1>
        <PokeForm searchPokemon={this.searchPokemon}/>
        <SelectedPokemonContainer selectedPokemon={this.state.selectedPokemon}/>
      </div>
    );
  }
}

export default App;

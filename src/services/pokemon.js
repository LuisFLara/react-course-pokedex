import axios from 'axios';
const pokeUrl = 'https://pokeapi.co/api/v2';
class Pokemon {
  static pokemon(id) {
    return axios.get(`${pokeUrl}/pokemon-form/${id}`);
  }
}

export default Pokemon;

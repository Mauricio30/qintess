import { useEffect, useState } from 'react';
import ListImages from './components/List';
import { ApiService } from './services/api';

function App() {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  const updateInfo = (data) => {
    const info = data.map(pokemonInfo => {
    const picture = pokemonInfo.sprites.other.dream_world.front_default;
    const name = pokemonInfo.name;
      return {
        name,
        picture
      }
    });
    setPokemonInfo(info);
  }

  const getData = async () => {
    await ApiService(updateInfo);
  }
  useEffect(() => {
    getData();
  }, [])

  if (pokemonInfo.length === 0) return <span>Loading info...</span>

  return (
    <div className="App">
      {pokemonInfo.map(pokemon => <ListImages {...pokemon} />)}
    </div>
  );
}

export default App;

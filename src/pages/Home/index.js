import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import SimpleCard from '../../components/SimpleCard';
import GlobalStateContext from '../../contexts/GlobalStateContext';
import { goToPokedex } from '../../routes/coordinators';
import { ContainerButton } from './style';

const Home = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [currentPage, setCurrentPage] = useState(true);
  const history = useHistory();

  const handleClickedPage = () => {
    setCurrentPage(false);
  };

  // useEffect(() => {
  //   requests.getPokemons();
  // }, []);

  const handleNewList = () => {
    setters.setNewPokemons(states.pokemonsNameList.next);
  };

  const handleOldList = () => {
    if (states.pokemonsNameList.previous === null) {
      alert('Pagina não encontrada');
      setCurrentPage(!currentPage);
    } else {
      setters.setNewPokemons(states.pokemonsNameList.previous);
    }
  };

  const list =
    states.pokemonsNameList.results &&
    states.pokemonsNameList.results.map((pokemon) => {
      return (
        <Grid item xs={12} sm={6} md={3}>
          <SimpleCard
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
            order={pokemon.order}
            handleAdd={() => requests.addPokemon(pokemon)}
          />
        </Grid>
      );
    });

  return (
    <div>
      <ContainerButton>
        <button onClick={() => goToPokedex(history)}>Ir para Pokédex</button>
        <button onClick={handleOldList}>
          {currentPage ? 'Página atual' : 'Página anterior'}
        </button>
        <button onClick={() => handleNewList() || handleClickedPage()}>
          Próxima página
        </button>
      </ContainerButton>

      <Grid container spacing={3}>
        {list}
      </Grid>
    </div>
  );
};

export default Home;

import React, { useState, useEffect, useContext } from "react";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import CardPokedex from "../../components/CardPokedex";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../routes/coordinators";
import { ContainerButton } from "./style";

const Pokedex = (props) => {
  const history = useHistory();
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [images, setImages] = useState("");
  const url = props.url;

  const list =
    states.myPokemons &&
    states.myPokemons.map((pokemon) => {
      return (
        <Grid item xs={12} sm={6} md={3}>
          <CardPokedex
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
            handleRemove={() => requests.removePokemon(pokemon)}
          />
        </Grid>
      );
    });

  return (
    <div>
      <ContainerButton>
        <button onClick={() => goToHome(history)}>Voltar para Home</button>
      </ContainerButton>
      <Grid container spacing={3}>
        {list}
      </Grid>
    </div>
  );
};

export default Pokedex;

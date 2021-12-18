import React, { useState, useEffect, useContext } from "react";
import {
  ContainerButton,
  PokeInfosContainer,
  ImagesContainer,
  ImgWrapper,
  StatsContainer,
  StatsView,
  TitleContainer,
  TypeAndMovesContainer,
  TypesContainer,
  MovesContainer,
} from "./style";
import axios from "axios";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import { useHistory } from "react-router-dom";
import { goToPokedex, goToHome } from "../../routes/coordinators";

const Details = () => {
  const history = useHistory();
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${states.url}`)
      .then((res) => {
        setPokemonName(res.data.species.name);
        setPokemonImage(res.data.sprites);
        setPokemonInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ContainerButton>
        <button onClick={() => goToPokedex(history)}>Ir para Pokédex</button>
        <button onClick={() => goToHome(history)}>Ir para Home</button>
      </ContainerButton>

      {pokemonInfo && (
        <PokeInfosContainer>
          <ImagesContainer>
            <ImgWrapper
              src={pokemonImage.front_default}
              alt="Imagem pokémon frente"
            />
            <ImgWrapper
              src={pokemonImage.back_default}
              alt="Imagem pokémon costas"
            />
          </ImagesContainer>

          <StatsContainer>
            <TitleContainer>
              <h1>Poderes</h1>
              {pokemonInfo.stats &&
                pokemonInfo.stats.slice(0, 5).map((power) => {
                  return (
                    <StatsView key={power.id}>
                      {power.stat.name.toUpperCase()}: 
                      <progress value={power.base_stat} max='100'></progress>
                      <span>{power.base_stat}%</span>
                    </StatsView>
                  );
                })}
            </TitleContainer>
          </StatsContainer>

          <TypeAndMovesContainer>
            <TypesContainer>
              {pokemonInfo.types &&
                pokemonInfo.types.map((element) => {
                  return <p>{element.type.name}</p>;
                })}
            </TypesContainer>

            <MovesContainer>
              <TitleContainer>
                <h1>Principais ataques</h1>
                {pokemonInfo.moves &&
                  pokemonInfo.moves.slice(0, 5).map((atack) => {
                    return <p>{atack.move.name.toUpperCase()}</p>;
                  })}
              </TitleContainer>
            </MovesContainer>
          </TypeAndMovesContainer>
        </PokeInfosContainer>
      )}
    </div>
  );
};

export default Details;

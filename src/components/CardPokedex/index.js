import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PokeName, StyledCard, ImageContainer } from "./styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { goToDetails } from "../../routes/coordinators";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import { Grid } from "@material-ui/core";
import SimpleCard from "../../components/SimpleCard";

const CardPokedex = (props) => {
  const history = useHistory();
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [images, setImages] = useState("");
  const url = props.url;

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        setImages(res.data.sprites.front_default);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <StyledCard elevation={3}>
      <CardContent>
        <PokeName>{props.name}</PokeName>
        <ImageContainer src={images} alt={props.name} />
      </CardContent>
      <CardActions>
        <Button onClick={props.handleRemove}>Remover</Button>
        <Button onClick={() => goToDetails(history) || setters.setUrl(url)}>
          Detalhes
        </Button>
      </CardActions>
    </StyledCard>
  );
}

export default CardPokedex;

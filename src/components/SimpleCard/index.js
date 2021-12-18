import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  StyledCard,
  ImageContainer,
  PokeName,
  Content,
  Wrapper,
  ContentActions,
} from './style';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { goToDetails } from '../../routes/coordinators';
import GlobalStateContext from '../../contexts/GlobalStateContext';

export default function SimpleCard(props) {
  const history = useHistory();
  const { setters } = useContext(GlobalStateContext);
  const [images, setImages] = useState('');
  const url = props.url;

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        setImages(res.data.sprites.front_default);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <Wrapper>
      <StyledCard>
        <Content>
          <PokeName>
            {props.name} <span>{props.id}</span>
          </PokeName>
          <ImageContainer src={images} alt={props.name} />
        </Content>
        <ContentActions>
          <Button onClick={props.handleAdd}>Capturar</Button>
          <Button onClick={() => goToDetails(history) || setters.setUrl(url)}>
            Detalhes
          </Button>
        </ContentActions>
      </StyledCard>
    </Wrapper>
  );
}

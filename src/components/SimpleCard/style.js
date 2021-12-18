import styled from "styled-components";
// import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCard = styled.div`
  width: 60%;
  margin: 2rem auto;
  background: #f2f2f2;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }

  /* & .MuiCardContent-root {
    background: #f2f2f2;
  }

  & .MuiGrid-spacing-xs-3 {
    /* padding: 10%; */
  } */
`;

export const PokeName = styled.h4`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.5em;
`;

export const Content = styled(CardContent)`

`

export const ImageContainer = styled.img`
  display: flex;
  margin: 0 auto;
  width: 100%;
  border-image: url('/assets/border.png') 30;
`;

export const ContentActions = styled(CardActions)`
  background: #5cb8fa;
  
  & button {
    color: #fff;
    font-weight: bold;
    
    & button:hover {
      cursor: url('https://emoji.gg/assets/emoji/6419_great_pokeball.png'), auto;
    }
  }
`

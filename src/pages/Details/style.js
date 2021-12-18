import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  button {
    background-color: #ffdb04;
    color: #2c71b6;
    font-weight: bold;
    border-radius: 5px;
    border: 2.3px solid #2c71b6;
    padding: 8px;
    display: flex;
    margin: 0 10px 0 0;

    &:hover {
      background-color: #f8f8ff;
      cursor: pointer;
      transition: 200ms;
    }
  }
`;

export const PokeInfosContainer = styled.main`
  height: 80vh;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 420px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ImagesContainer = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWrapper = styled.img`
  border: 1px solid #efefef;
  border-radius: 10px;
  box-shadow: 1px 5px 10px 0 rgba(50, 50, 50, 0.77);
  height: 25vh;

  @media (max-width: 420px) {
    flex-direction: column;
    width: 80%;
    height: 220px;
    padding: 30px;
    margin: 20px 0;
  }
`;

export const StatsContainer = styled.div`
  border: 1px solid #efefef;
  border-radius: 10px;
  box-shadow: 1px 5px 10px 0 rgba(50, 50, 50, 0.77);
  align-self: center;
  height: 75%;
  width: 360px;
  display: grid;
  grid-template-rows: 80px repeat(6, 1fr);
  padding: 0 20px;

  @media (max-width: 420px) {
    width: 80%;
    height: 420px;
    padding: 30px;
    margin: 20px 0;
  }
`;

export const TitleContainer = styled.div`
  padding: 0 5px;

  h1 {
    display: flex;
    justify-content: center;
    padding: 0;
    text-align: center;
    font-size: 1.5em;
  }

  p {
    border: 1px solid #efefef;
    background-color: #0875f6;
    color: #fff;
    border-radius: 10px;
    font-size: 0.9em;
    font-weight: normal;
    padding: 5px;
    text-transform: capitalize;
  }
`;

export const StatsView = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 40px;
  align-items: center;

  progress {
    font-size: 0.9em;
    height: 40px;
    margin-right: 10px;
  }

  span {
    font-size: 0.9em;
    font-weight: normal;
    padding: 5px;
  }
`;

export const TypeAndMovesContainer = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TypesContainer = styled.div`
  border: 1px solid #efefef;
  border-radius: 10px;
  box-shadow: 1px 5px 10px 0 rgba(50, 50, 50, 0.77);
  height: 10%;
  display: flex;
  justify-content: space-around;

  p {
    border: 1px solid #efefef;
    background-color: #0875f6;
    color: #fff;
    border-radius: 10px;
    margin: auto;
    padding: 3px 40px;
    text-transform: uppercase;
  }

  @media (max-width: 420px) {
    min-width: 80%;
    margin: 20px 0;
  }
`;

export const MovesContainer = styled.div`
  border: 1px solid #efefef;
  border-radius: 10px;
  box-shadow: 1px 5px 10px 0 rgba(50, 50, 50, 0.77);
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  text-align: center;
  padding: 0 20px;
  height: 80%;

  @media (max-width: 420px) {
    width: 80%;
    height: 420px;
    padding: 30px;
    margin: 20px 0;
  }
`;

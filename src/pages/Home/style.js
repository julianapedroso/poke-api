import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 3rem;

  button {
    background-color: #ffdb04;
    color: #2c71b6;
    font-weight: bold;
    border-radius: 5px;
    border: 2.3px solid #2c71b6;
    padding: 8px;

    &:hover {
      background-color: #f8f8ff;
      cursor: pointer;
      transition: 200ms;
    }
  }
`;

import styled from "styled-components";

export const PokedexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 50px auto;
  border: 2px solid #000;
  width: 350px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.textBackground};
  width: 170px;
  height: 45px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  outline: none;
  &:focus {
    border: 2px solid #5c7599;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonAbility = styled.p`
  padding: 5px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.infoColor};
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;

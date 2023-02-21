import styled, { css } from "styled-components";

export const PokemonInfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 20px;
    border: 2px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.textBackground};
  `}
`;

export const PokemonName = styled.h2`
  font-size: 24px;
  text-align: center;
  padding: 5px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const PokemonInfo = styled.p`
  padding: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.infoColor};
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

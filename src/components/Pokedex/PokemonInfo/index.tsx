import { TPokemonInfo } from "./types";
import * as s from "./styles";

const PokemonInfo = ({
  baseExperience,
  name,
  weight,
  abilities,
  children,
  id,
}: TPokemonInfo) => (
  <s.PokemonInfoContainer>
    <s.PokemonName>
      {name} {id}
    </s.PokemonName>
    <s.InfoContainer>
      <s.PokemonInfo>{baseExperience}</s.PokemonInfo>
      <s.PokemonInfo>{weight}</s.PokemonInfo>
    </s.InfoContainer>
    <s.PokemonName>{abilities}</s.PokemonName>
    {children}
  </s.PokemonInfoContainer>
);

export default PokemonInfo;

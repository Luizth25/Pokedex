import { TPokemonImageProps } from "./types";
import * as s from "./styles";

const PokemonImage = ({ image, name }: TPokemonImageProps) => (
  <s.PokemonImageContainer>
    <img src={image} alt={name} />
  </s.PokemonImageContainer>
);

export default PokemonImage;

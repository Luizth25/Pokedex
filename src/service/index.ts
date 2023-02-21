import { api } from "api";
import { TPokemonInfoRaw, TPokemonInfo } from "components/Pokedex/types";

export const getPokemonNameOrId = (
  pokemonNameOrId: string
): Promise<TPokemonInfo> =>
  api.get<TPokemonInfoRaw>(`/pokemon/${pokemonNameOrId}`).then((response) => {
    return {
      name: response.data.name,
      image:
        response.data.sprites.versions["generation-v"]["black-white"].animated
          .front_default,
      exp: response.data.base_experience,
      weight: response.data.weight,
      abilities: response.data.abilities.map((ev) => ev.ability.name),
      id: response.data.id,
    };
  });

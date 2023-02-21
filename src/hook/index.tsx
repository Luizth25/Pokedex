import { TPokemonInfo } from "components/Pokedex/types";
import { useState } from "react";
import { getPokemonNameOrId } from "service";

export default function UseGetPokemonNameOrId() {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<TPokemonInfo>({
    name: "",
    image: "",
    exp: 0,
    weight: 0,
    abilities: [],
    id: 0,
  });

  const getPokemon = (pokemonNameOrId: string) =>
    getPokemonNameOrId(pokemonNameOrId)
      .then(({ abilities, exp, id, image, name, weight }) => {
        setPokemon({
          abilities,
          exp,
          id,
          image,
          name,
          weight,
        });
      })
      .catch((e) => {
        alert("Nome ou Id do Pokemon não encontrado, tente novamente");
        console.error(e);
        setPokemon({
          name: "",
          image: "",
          exp: 0,
          weight: 0,
          abilities: [],
          id: 0,
        });
      })
      .finally(() => setLoading(false));

  return { getPokemon, pokemon, loading };
}

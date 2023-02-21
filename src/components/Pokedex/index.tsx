import { useState } from "react";

import UseGetPokemonNameOrId from "hook";

import Button from "components/Button";
import PokemonImage from "components/Pokedex/PokemonImage";
import PokemonInfo from "components/Pokedex/PokemonInfo";

import * as s from "./styles";

const Pokedex = () => {
  const [pokemonNameOrId, setPokemonNameOrId] = useState("");
  const { pokemon, getPokemon, loading } = UseGetPokemonNameOrId();

  const handleClick = () => {
    getPokemon(pokemonNameOrId);
    setPokemonNameOrId("");
  };

  return (
    <s.PokedexContainer>
      <s.Title>Pokédex</s.Title>
      <PokemonImage image={pokemon.image} name={pokemon.name} />
      {loading ? (
        <p>carregando</p>
      ) : (
        <>
          <PokemonInfo
            id={pokemon.id ? `# ${pokemon.id}` : ""}
            abilities={pokemon.name ? "abilities" : ""}
            name={pokemon.name}
            baseExperience={pokemon.exp ? `Experience: ${pokemon.exp}` : ""}
            weight={pokemon.weight ? `weight: ${pokemon.weight}` : ""}
          >
            <s.ListContainer>
              {pokemon.abilities.map((ability) => (
                <li key={ability}>
                  <s.PokemonAbility>{ability}</s.PokemonAbility>
                </li>
              ))}
            </s.ListContainer>
          </PokemonInfo>
        </>
      )}

      <s.Input
        type="text"
        placeholder="Nome ou Id do Pokémon"
        value={pokemonNameOrId}
        onChange={(ev) => setPokemonNameOrId(ev.target.value)}
      />
      <Button label="Buscar" onClick={handleClick} />
    </s.PokedexContainer>
  );
};

export default Pokedex;

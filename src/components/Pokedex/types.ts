export type TPokemonInfo = {
  image: string;
  name: string;
  exp: number;
  weight: number;
  id: number;
  abilities: string[];
};

export type TPokemonInfoRaw = {
  name: string;
  base_experience: number;
  weight: number;
  id: number;
  sprites:
    | {
        versions: {
          "generation-v": {
            "black-white": {
              animated: {
                front_default: string;
              };
            };
          };
        };
      }
    | any;
  abilities: Array<TAbilitiesPokemonRaw>;
};

export type TAbilitiesPokemonRaw = {
  ability: {
    name: string;
  };
};

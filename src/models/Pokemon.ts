interface PokemonAbility {
  name: string;
  url: string;
}

interface OtherSprites {
  "official-artwork": {
    front_default: string;
  }
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: OtherSprites;
}

export interface Pokemon {
  name: string;
  success: boolean;
  abilities: Array<{
    ability: PokemonAbility;
    is_hidden: boolean;
    slot: number;
  }>;
  sprites: Sprites;
}
export interface PokeResponse {
  count: number;
  next: string;
  previous: null;
  results: PokemonSmall[];
}

export interface PokemonSmall {
  name: string;
  url: string;
}

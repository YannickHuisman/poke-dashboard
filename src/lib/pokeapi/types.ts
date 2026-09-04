export type StatKey = 'HP' | 'ATK' | 'DEF' | 'SPD' | 'EXP';

export interface Stat {
  key: StatKey;
  value: number;
  max: number;
}

export interface PokemonSummary {
  id: number;
  name: string;
}

export interface Pokemon extends PokemonSummary {
  types: string[];
  moves: string[];
  hiddenMoves: number;
  stats: Stat[];
  images: string[];
}

// ---------------------------------------------------------------------------
// Raw API shapes — only the fields we read are declared.
// ---------------------------------------------------------------------------

export interface RawNamedRef {
  name: string;
  url: string;
}

export interface RawPokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: RawNamedRef[];
}

interface RawSpriteSet {
  front_default: string | null;
  front_shiny: string | null;
}

export interface RawPokemon {
  id: number;
  name: string;
  base_experience: number | null;
  types: { type: RawNamedRef }[];
  moves: { move: RawNamedRef }[];
  stats: { base_stat: number; stat: RawNamedRef }[];
  sprites: {
    other: {
      home: RawSpriteSet;
      'official-artwork': RawSpriteSet;
    };
  };
}

export interface RawSpecies {
  flavor_text_entries: {
    flavor_text: string;
    language: RawNamedRef;
  }[];
}

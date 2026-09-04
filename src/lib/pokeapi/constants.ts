export const POKEAPI_BASE = 'https://pokeapi.co/api/v2';

const SPRITE_BASE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

// Built by hand because the list endpoint sends no sprites: without this the
// grid would need a detail request per card
export const officialArtwork = (id: number) => `${SPRITE_BASE}/other/official-artwork/${id}.png`;

export const STAT_MAX = {
  HP: 200,
  ATK: 150,
  DEF: 200,
  SPD: 150,
  EXP: 300,
} as const;

export const INDEX_LIMIT = 100000;
export const MAX_MOVES = 15;
export const MAIN_DEX_MAX = 1025;

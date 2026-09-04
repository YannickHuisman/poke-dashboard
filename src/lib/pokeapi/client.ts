import { INDEX_LIMIT, MAIN_DEX_MAX, POKEAPI_BASE } from './constants';
import { toDescription, toPokemon, toPokemonSummary } from './toPokemon';
import type { Pokemon, PokemonSummary, RawPokemon, RawPokemonList, RawSpecies } from './types';

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${POKEAPI_BASE}${path}`);

  if (!res.ok) throw new ApiError(res.status, `GET ${path} failed with ${res.status}`);

  return (await res.json()) as T;
}

export async function fetchPokemonIndex(): Promise<PokemonSummary[]> {
  const raw = await get<RawPokemonList>(`/pokemon?limit=${INDEX_LIMIT}&offset=0`);
  return raw.results.map(toPokemonSummary).filter((entry) => entry.id <= MAIN_DEX_MAX);
}

export async function fetchPokemon(id: number): Promise<Pokemon> {
  return toPokemon(await get<RawPokemon>(`/pokemon/${id}`));
}

export async function fetchDescription(id: number): Promise<string> {
  return toDescription(await get<RawSpecies>(`/pokemon-species/${id}`));
}

import { formatPokedexNumber } from '@lib/formatPokedexNumber';
import type { PokemonSummary } from '@lib/pokeapi';

export function filterPokemon(pokemon: PokemonSummary[], query: string): PokemonSummary[] {
  const q = query.trim().toLowerCase();

  if (!q) return pokemon;

  return pokemon.filter(
    (entry) => entry.name.includes(q) || formatPokedexNumber(entry.id).includes(q),
  );
}

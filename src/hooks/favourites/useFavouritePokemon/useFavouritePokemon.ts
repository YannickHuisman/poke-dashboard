'use client';

import type { PokemonSummary } from '@lib/pokeapi';
import { useFavourites } from '@/hooks/favourites/useFavourites';
import { usePokemonList } from '@/hooks/pokemon/usePokemonList';

export function useFavouritePokemon() {
  const { data, isLoading } = usePokemonList();
  const { ids } = useFavourites();

  const byId = new Map((data ?? []).map((entry) => [entry.id, entry]));

  const pokemon = ids
    .map((id) => byId.get(id))
    .filter((entry): entry is PokemonSummary => entry !== undefined);

  return { pokemon, isLoading };
}

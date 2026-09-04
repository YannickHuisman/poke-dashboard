'use client';

import { useState } from 'react';

import { PokemonGrid } from '@components/PokemonGrid';
import { PokemonToolbar } from '@components/PokemonToolbar';
import { filterPokemon } from '@lib/filterPokemon';
import type { PokemonSummary } from '@lib/pokeapi';
import { useDebouncedValue } from '@/hooks/ui/useDebouncedValue';

interface PokemonBrowserProps {
  pokemon: PokemonSummary[];
  isLoading?: boolean;
  emptyTitle?: string;
  emptyBody?: string;
}

export function PokemonBrowser({ pokemon, isLoading, emptyTitle, emptyBody }: PokemonBrowserProps) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebouncedValue(search, 250);

  const visible = filterPokemon(pokemon, debouncedSearch);
  const isSearching = debouncedSearch.trim().length > 0;

  return (
    <>
      <PokemonToolbar search={search} onSearchChange={setSearch} />
      <PokemonGrid
        pokemon={visible}
        isLoading={isLoading}
        emptyTitle={isSearching ? 'No Pokémon found' : emptyTitle}
        emptyBody={isSearching ? 'Try a different name or Pokédex number.' : emptyBody}
      />
    </>
  );
}

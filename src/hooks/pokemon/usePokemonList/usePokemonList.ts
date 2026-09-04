'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchPokemonIndex } from '@lib/pokeapi';

const pokemonListKey = ['pokemon', 'index'] as const;

export function usePokemonList() {
  return useQuery({
    queryKey: pokemonListKey,
    queryFn: fetchPokemonIndex,
  });
}

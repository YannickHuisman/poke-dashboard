'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchDescription, fetchPokemon } from '@lib/pokeapi';

export function usePokemonDetail(id: number) {
  const pokemon = useQuery({
    queryKey: ['pokemon', 'detail', id],
    queryFn: () => fetchPokemon(id),
  });

  const description = useQuery({
    queryKey: ['pokemon', 'description', id],
    queryFn: () => fetchDescription(id),
  });

  return {
    pokemon: pokemon.data,
    description: description.data,
    isLoading: pokemon.isLoading || description.isLoading,
    isError: pokemon.isError || description.isError,
  };
}

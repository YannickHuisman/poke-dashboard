'use client';

import { PokemonBrowser } from '@components/PokemonBrowser';
import { usePokemonList } from '@/hooks/pokemon/usePokemonList';

export default function PokedexPage() {
  const { data, isLoading } = usePokemonList();

  return <PokemonBrowser pokemon={data ?? []} isLoading={isLoading} />;
}

'use client';

import { PokemonBrowser } from '@components/PokemonBrowser';
import { useFavouritePokemon } from '@/hooks/favourites/useFavouritePokemon';

export default function FavouritesPage() {
  const { pokemon, isLoading } = useFavouritePokemon();

  return (
    <PokemonBrowser
      pokemon={pokemon}
      isLoading={isLoading}
      emptyTitle="No favourites yet"
      emptyBody="Tap the heart on any Pokémon to keep it here."
    />
  );
}

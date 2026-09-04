'use client';

import { Heading } from '@components/Heading';
import { Paragraph } from '@components/Paragraph';
import { PokemonCardSkeleton } from '@components/PokemonCardSkeleton';
import type { PokemonSummary } from '@lib/pokeapi';
import { useIncrementalList } from '@/hooks/ui/useIncrementalList';

import { PokemonCard } from '../PokemonCard';
import { StyledEmpty, StyledGrid, StyledSentinel } from './styles';

const SKELETON_COUNT = 20;
const PAGE_SIZE = 40;

interface PokemonGridProps {
  pokemon: PokemonSummary[];
  isLoading?: boolean;
  emptyTitle?: string;
  emptyBody?: string;
}

export function PokemonGrid({
  pokemon,
  isLoading = false,
  emptyTitle = 'No Pokémon found',
  emptyBody = 'Try a different name or Pokédex number.',
}: PokemonGridProps) {
  const { visible, hasMore, sentinelRef } = useIncrementalList(pokemon, PAGE_SIZE);

  if (isLoading) {
    return (
      <StyledGrid aria-busy="true" aria-label="Loading Pokémon">
        {Array.from({ length: SKELETON_COUNT }, (_, index) => (
          <li key={index}>
            <PokemonCardSkeleton />
          </li>
        ))}
      </StyledGrid>
    );
  }

  if (pokemon.length === 0) {
    return (
      <StyledEmpty $gap="sm" $align="center">
        <Heading as="h2" $size="xl">
          {emptyTitle}
        </Heading>
        <Paragraph $color="muted">{emptyBody}</Paragraph>
      </StyledEmpty>
    );
  }

  return (
    <>
      <StyledGrid>
        {visible.map((entry) => (
          <li key={entry.id}>
            <PokemonCard pokemonSummary={entry} />
          </li>
        ))}
      </StyledGrid>

      {hasMore && <StyledSentinel ref={sentinelRef} aria-hidden />}
    </>
  );
}

'use client';

import { useTheme } from 'styled-components';

import { Chip } from '@components/Chip';
import { FavouriteButton } from '@components/FavouriteButton';
import { FlexCol, FlexRow } from '@components/Flex';
import { Heading } from '@components/Heading';
import { ImageSlider } from '@components/ImageSlider';
import { Paragraph } from '@components/Paragraph';
import { Skeleton } from '@components/Skeleton';
import { StatBar } from '@components/StatBar';
import { TypeChip } from '@components/TypeChip';
import { formatPokedexNumber } from '@lib/formatPokedexNumber';
import { officialArtwork, type PokemonSummary } from '@lib/pokeapi';
import { usePokemonDetail } from '@/hooks/pokemon/usePokemonDetail';
import { typeTone } from '@/theme';

import { StyledBody, StyledClose, StyledHeader, StyledMoveGrid } from './styles';

interface PokemonDetailProps {
  pokemonSummary: PokemonSummary;
  onClose: () => void;
}

export function PokemonDetail({ pokemonSummary, onClose }: PokemonDetailProps) {
  const { pokemon, description, isLoading, isError } = usePokemonDetail(pokemonSummary.id);
  const theme = useTheme();
  const tone = typeTone(theme, pokemon?.types[0]);
  const images = pokemon?.images ?? [officialArtwork(pokemonSummary.id)];

  return (
    <>
      <StyledHeader $tone={tone} as="header" $gap="md" $justify="space-between" $align="flex-start">
        <div>
          <Heading as="h2" $size="display" $transform="capitalize">
            {pokemonSummary.name}
          </Heading>
          <Paragraph $weight={600} $color="muted" $numeric>
            {formatPokedexNumber(pokemonSummary.id)}
          </Paragraph>
        </div>
        <StyledClose type="button" aria-label="Close" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </StyledClose>
      </StyledHeader>

      <StyledBody>
        <FlexCol as="section" $gap="sm" $minWidth="0">
          <ImageSlider
            images={images}
            alt={pokemonSummary.name}
            tone={tone}
            sizes="(min-width: 768px) 340px, 80vw"
          >
            <FavouriteButton id={pokemonSummary.id} name={pokemonSummary.name} />
          </ImageSlider>
        </FlexCol>

        <FlexCol as="section" $gap="sm" $minWidth="0">
          <Heading as="h3" $size="lg">
            Description
          </Heading>

          {isLoading && <Skeleton $height="72px" />}
          {isError && <Paragraph $color="muted">Could not load this Pokémon.</Paragraph>}
          {!isLoading && !isError && <Paragraph>{description}</Paragraph>}

          {pokemon && (
            <FlexRow $gap="sm" $wrap>
              {pokemon.types.map((type) => (
                <TypeChip key={type} type={type} />
              ))}
            </FlexRow>
          )}
        </FlexCol>

        <FlexCol as="section" $gap="sm" $minWidth="0">
          <Heading as="h3" $size="lg">
            Base stats
          </Heading>

          {isLoading && <Skeleton $height="140px" />}
          {pokemon && (
            <FlexCol $gap="sm">
              {pokemon.stats.map((stat) => (
                <StatBar key={stat.key} stat={stat} tone={tone} />
              ))}
            </FlexCol>
          )}
        </FlexCol>

        <FlexCol as="section" $gap="sm" $minWidth="0">
          <Heading as="h3" $size="lg">
            Moves
          </Heading>

          {isLoading && <Skeleton $height="140px" />}
          {pokemon && (
            <StyledMoveGrid>
              {pokemon.moves.map((move) => (
                <Chip key={move}>{move.replace(/-/g, ' ')}</Chip>
              ))}
              {pokemon.hiddenMoves > 0 && (
                <Chip title={`${pokemon.hiddenMoves} more moves`}>+{pokemon.hiddenMoves}</Chip>
              )}
            </StyledMoveGrid>
          )}
        </FlexCol>
      </StyledBody>
    </>
  );
}

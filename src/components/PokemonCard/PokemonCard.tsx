'use client';

import { FavouriteButton } from '@components/FavouriteButton';
import { Heading } from '@components/Heading';
import { Image } from '@components/Image';
import { Paragraph } from '@components/Paragraph';
import { PokemonDetail } from '@components/PokemonDetail';
import { formatPokedexNumber } from '@lib/formatPokedexNumber';
import { officialArtwork, type PokemonSummary } from '@lib/pokeapi';
import { useModal } from '@/hooks/ui/useModal';

import { StyledCardButton, StyledImageWrapper, StyledPokemonCard } from './styles';

interface PokemonCardProps {
  pokemonSummary: PokemonSummary;
}

export function PokemonCard({ pokemonSummary }: PokemonCardProps) {
  const modal = useModal();

  const openDetail = () => {
    modal.open({
      ariaLabel: pokemonSummary.name,
      render: (close) => <PokemonDetail pokemonSummary={pokemonSummary} onClose={close} />,
    });
  };

  return (
    <StyledPokemonCard $gap="xs">
      <StyledCardButton
        type="button"
        aria-label={`View ${pokemonSummary.name}`}
        onClick={openDetail}
      />
      <StyledImageWrapper>
        <FavouriteButton id={pokemonSummary.id} name={pokemonSummary.name} />
        <Image src={officialArtwork(pokemonSummary.id)} alt={pokemonSummary.name} />
      </StyledImageWrapper>

      <Heading as="h2" $size="lg" $transform="capitalize" $truncate>
        {pokemonSummary.name}
      </Heading>
      <Paragraph $size="sm" $weight={600} $color="muted" $numeric>
        {formatPokedexNumber(pokemonSummary.id)}
      </Paragraph>
    </StyledPokemonCard>
  );
}

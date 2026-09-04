import { Skeleton } from '@components/Skeleton';

import { StyledArtwork, StyledCardSkeleton } from './styles';

export function PokemonCardSkeleton() {
  return (
    <StyledCardSkeleton $gap="sm">
      <StyledArtwork>
        <Skeleton $width="100%" $height="100%" $radius="14px" />
      </StyledArtwork>
      <Skeleton $width="60%" $height="16px" />
      <Skeleton $width="35%" $height="13px" />
    </StyledCardSkeleton>
  );
}

import styled from 'styled-components';

import { FlexCol } from '@components/Flex';
import { cardSurface } from '@/mixins';

export const StyledCardSkeleton = styled(FlexCol)`
  ${cardSurface}
  padding: ${({ theme }) => theme.space.md};
`;

export const StyledArtwork = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
`;

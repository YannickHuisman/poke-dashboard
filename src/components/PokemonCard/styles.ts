import styled from 'styled-components';

import { FlexCol } from '@components/Flex';
import { buttonReset, cardSurface } from '@/mixins';

export const StyledPokemonCard = styled(FlexCol)`
  ${cardSurface}
  position: relative;
  padding: ${({ theme }) => theme.space.md};
`;

export const StyledCardButton = styled.button`
  ${buttonReset}
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: ${({ theme }) => theme.radius.lg};
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
`;

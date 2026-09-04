import styled from 'styled-components';

import { FlexCol } from '@components/Flex';
import { cardSurface } from '@/mixins';

export const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.md};
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledEmpty = styled(FlexCol)`
  max-width: 480px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.xl};
  ${cardSurface}
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`;

// Watched by the IntersectionObserver; never visible itself
export const StyledSentinel = styled.div`
  height: 1px;
`;

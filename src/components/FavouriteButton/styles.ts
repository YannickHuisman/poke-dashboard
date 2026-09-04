import styled from 'styled-components';

import { buttonReset } from '@/mixins';

export const StyledFavouriteButton = styled.button<{ $isFavourite: boolean }>`
  ${buttonReset}
  position: absolute;
  top: ${({ theme }) => theme.space.sm};
  right: ${({ theme }) => theme.space.sm};
  z-index: 2;
  display: flex;
  padding: ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.glass.surface};
  backdrop-filter: ${({ theme }) => theme.glass.blur};
  box-shadow: ${({ theme }) => theme.shadows.card};
  color: ${({ $isFavourite, theme }) =>
    $isFavourite ? theme.colors.favourite : theme.colors.muted};

  &:hover {
    color: ${({ theme }) => theme.colors.favourite};
  }
`;

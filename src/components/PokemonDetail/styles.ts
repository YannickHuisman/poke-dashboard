import styled from 'styled-components';

import { FlexRow } from '@components/Flex';
import { belowMobile, iconButton } from '@/mixins';

export const StyledHeader = styled(FlexRow)<{ $tone: string }>`
  padding-bottom: ${({ theme }) => theme.space.md};
  background: linear-gradient(${({ $tone }) => $tone}, ${({ $tone }) => $tone}) bottom left / 100%
    3px no-repeat;
  transition: background-image ${({ theme }) => theme.durations.base};
`;

export const StyledClose = styled.button`
  ${iconButton}
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.colors.surfaceSoft};
  color: ${({ theme }) => theme.colors.muted};
  transition: background ${({ theme }) => theme.durations.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.redSoft};
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const StyledBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.lg};
  padding-top: ${({ theme }) => theme.space.lg};

  ${belowMobile} {
    grid-template-columns: 1fr;
  }
`;

export const StyledMoveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space.sm};
`;

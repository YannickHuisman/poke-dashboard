import styled from 'styled-components';

import { FlexRow } from '@components/Flex';
import { iconButton } from '@/mixins';

export const StyledTopBar = styled(FlexRow)`
  grid-area: topbar;
  position: sticky;
  top: 0;
  z-index: 30;
  height: ${({ theme }) => theme.layout.topBarHeight};
  padding: 0 ${({ theme }) => theme.space.md};
  background: ${({ theme }) => theme.colors.topBar};
  color: ${({ theme }) => theme.colors.topBarText};
  box-shadow: ${({ theme }) => theme.shadows.bar};
`;

export const StyledToggle = styled.button`
  ${iconButton}
  width: 40px;
  height: 40px;
  transition: background ${({ theme }) => theme.durations.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.topBarHover};
  }
`;

export const StyledWordmark = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
`;

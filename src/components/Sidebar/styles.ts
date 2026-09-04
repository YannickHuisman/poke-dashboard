import Link from 'next/link';
import styled, { css } from 'styled-components';

import { FlexCol } from '@components/Flex';
import { belowMobile, reducedMotion } from '@/mixins';

export const StyledSidebar = styled.aside<{ $open: boolean }>`
  grid-area: sidebar;
  align-self: start;
  position: sticky;
  top: ${({ theme }) => theme.layout.topBarHeight};
  height: calc(100vh - ${({ theme }) => theme.layout.topBarHeight});
  z-index: 20;
  background: ${({ theme }) => theme.colors.sidebar};
  overflow: hidden;

  ${belowMobile} {
    position: fixed;
    inset: ${({ theme }) => theme.layout.topBarHeight} 0 0 0;
    width: 100%;
    box-shadow: ${({ theme }) => theme.shadows.bar};
    transition: transform ${({ theme }) => theme.durations.base}
      ${({ theme }) => theme.easings.lift};

    ${({ $open }) =>
      !$open &&
      css`
        transform: translateX(-100%);
      `}

    ${reducedMotion}
  }
`;

export const StyledNav = styled.nav`
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.sm};
  width: ${({ theme }) => theme.layout.sidebarWidth};

  ${belowMobile} {
    width: 100%;
  }
`;

export const StyledNavList = styled(FlexCol)`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledNavLink = styled(Link)<{ $active: boolean }>`
  display: block;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ $active, theme }) => ($active ? theme.colors.red : theme.colors.muted)};
  text-decoration: none;
  white-space: nowrap;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  background: ${({ $active, theme }) => ($active ? theme.colors.sidebarActive : 'transparent')};
  transition:
    background ${({ theme }) => theme.durations.fast},
    color ${({ theme }) => theme.durations.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceSoft};
    color: ${({ theme }) => theme.colors.text};
  }
`;

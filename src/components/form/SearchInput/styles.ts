import styled, { css } from 'styled-components';

import { buttonReset } from '@/mixins';

export const StyledSearchInput = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSearchControl = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 48px 0 ${({ theme }) => theme.space.md};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font: inherit;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: box-shadow ${({ theme }) => theme.durations.base} ${({ theme }) => theme.easings.lift};

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    outline: none;
    background: ${({ theme }) => theme.glass.surfaceStrong};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`;

const slot = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled.span`
  ${slot}
  right: 18px;
  color: ${({ theme }) => theme.colors.muted};
  pointer-events: none;
`;

export const StyledClear = styled.button`
  ${buttonReset}
  ${slot}
  right: 12px;
  padding: ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.radius.pill};
  color: ${({ theme }) => theme.colors.muted};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceSoft};
    color: ${({ theme }) => theme.colors.text};
  }
`;

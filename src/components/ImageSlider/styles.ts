import styled from 'styled-components';

import { buttonReset, iconButton, reducedMotion } from '@/mixins';

export const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
`;

export const StyledArrow = styled.button<{ $side: 'left' | 'right' }>`
  ${iconButton}
  position: absolute;
  top: 50%;
  ${({ $side }) => $side}: ${({ theme }) => theme.space.sm};
  transform: translateY(-50%);
  z-index: 2;
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.glass.surface};
  backdrop-filter: ${({ theme }) => theme.glass.blur};
  box-shadow: ${({ theme }) => theme.shadows.card};
  color: ${({ theme }) => theme.colors.muted};
  transition:
    color ${({ theme }) => theme.durations.fast},
    background ${({ theme }) => theme.durations.fast};

  &:hover {
    background: ${({ theme }) => theme.glass.surfaceStrong};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const StyledDot = styled.button<{ $active: boolean; $tone: string }>`
  ${buttonReset}
  width: ${({ $active }) => ($active ? '22px' : '8px')};
  height: 8px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ $active, $tone, theme }) => ($active ? $tone : theme.colors.border)};
  transition:
    width ${({ theme }) => theme.durations.base} ${({ theme }) => theme.easings.lift},
    background ${({ theme }) => theme.durations.fast};

  ${reducedMotion}
`;

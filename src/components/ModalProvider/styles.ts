import styled, { keyframes } from 'styled-components';

import { FlexRow } from '@components/Flex';
import { reducedMotion } from '@/mixins';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const panelIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.99);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const StyledBackdrop = styled(FlexRow)`
  position: fixed;
  inset: 0;
  z-index: 9998;
  padding: ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.backdrop};
  overflow-y: auto;
  animation: ${fadeIn} ${({ theme }) => theme.durations.fast} ease-out;

  ${reducedMotion}
`;

export const StyledModal = styled.div`
  width: 100%;
  max-width: 720px;
  max-height: 90vh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.float};
  animation: ${panelIn} ${({ theme }) => theme.durations.base} ${({ theme }) => theme.easings.lift};

  &:focus {
    outline: none;
  }

  ${reducedMotion}
`;

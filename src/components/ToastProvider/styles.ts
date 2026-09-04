import styled, { keyframes } from 'styled-components';

import { FlexCol } from '@components/Flex';
import { reducedMotion } from '@/mixins';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledToastViewport = styled(FlexCol)`
  position: fixed;
  bottom: ${({ theme }) => theme.space.lg};
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  pointer-events: none;
`;

export const StyledToast = styled.div`
  pointer-events: auto;
  max-width: 90vw;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.toast};
  color: ${({ theme }) => theme.colors.toastText};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.shadows.float};
  animation: ${slideIn} ${({ theme }) => theme.durations.base} ${({ theme }) => theme.easings.lift};

  ${reducedMotion}
`;

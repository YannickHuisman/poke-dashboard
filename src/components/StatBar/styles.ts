import styled from 'styled-components';

import { reducedMotion } from '@/mixins';

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
`;

export const StyledLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.muted};
`;

export const StyledTrack = styled.div`
  position: relative;
  height: 22px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.surfaceSoft};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  overflow: hidden;
`;

export const StyledFill = styled.div<{ $percentage: number; $tone: string }>`
  width: ${({ $percentage }) => $percentage}%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ $tone }) => $tone};
  transition: width ${({ theme }) => theme.durations.base} ${({ theme }) => theme.easings.lift};

  ${reducedMotion}
`;

export const StyledValue = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({ theme }) => theme.colors.muted};
`;

import type { Stat } from '@lib/pokeapi';

import { StyledFill, StyledLabel, StyledRow, StyledTrack, StyledValue } from './styles';

interface StatBarProps {
  stat: Stat;
  tone: string;
}

export function StatBar({ stat, tone }: StatBarProps) {
  const percentage = Math.min(100, (stat.value / stat.max) * 100);

  return (
    <StyledRow>
      <StyledLabel>{stat.key}</StyledLabel>
      <StyledTrack
        role="meter"
        aria-label={stat.key}
        aria-valuenow={stat.value}
        aria-valuemin={0}
        aria-valuemax={stat.max}
      >
        <StyledFill $percentage={percentage} $tone={tone} />
        <StyledValue>
          {stat.value} / {stat.max}
        </StyledValue>
      </StyledTrack>
    </StyledRow>
  );
}

'use client';

import { Menu } from 'lucide-react';

import { StyledToggle, StyledTopBar, StyledWordmark } from './styles';

interface TopBarProps {
  controls: string;
  expanded: boolean;
  onToggle: () => void;
}

export function TopBar({ controls, expanded, onToggle }: TopBarProps) {
  return (
    <StyledTopBar as="header" $align="center" $gap="md">
      <StyledToggle
        type="button"
        onClick={onToggle}
        aria-controls={controls}
        aria-expanded={expanded}
        aria-label={expanded ? 'Close navigation' : 'Open navigation'}
      >
        <Menu size={22} aria-hidden />
      </StyledToggle>
      <StyledWordmark>Pokédex</StyledWordmark>
    </StyledTopBar>
  );
}

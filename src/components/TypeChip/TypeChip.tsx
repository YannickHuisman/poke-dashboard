'use client';

import { useTheme } from 'styled-components';

import { typeTone } from '@/theme';

import { StyledTypeChip } from './styles';

export function TypeChip({ type }: { type: string }) {
  const theme = useTheme();
  return <StyledTypeChip $tone={typeTone(theme, type)}>{type}</StyledTypeChip>;
}

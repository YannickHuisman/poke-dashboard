import styled from 'styled-components';

export const StyledTypeChip = styled.span<{ $tone: string }>`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ $tone }) => $tone};
  color: ${({ theme }) => theme.colors.onAccent};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: capitalize;
`;

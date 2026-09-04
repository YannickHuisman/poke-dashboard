'use client';

import { SearchInput } from '@components/form/SearchInput';

import { StyledSearchSlot, StyledToolbar } from './styles';

interface PokemonToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function PokemonToolbar({ search, onSearchChange }: PokemonToolbarProps) {
  return (
    <StyledToolbar $justify="center">
      <StyledSearchSlot>
        <SearchInput
          value={search}
          onChange={onSearchChange}
          placeholder="Search Pokémon by name or number"
          ariaLabel="Search Pokémon by name or number"
        />
      </StyledSearchSlot>
    </StyledToolbar>
  );
}

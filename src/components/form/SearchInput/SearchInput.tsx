'use client';

import { Search, X } from 'lucide-react';

import { StyledClear, StyledIcon, StyledSearchControl, StyledSearchInput } from './styles';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  clearLabel?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder,
  ariaLabel,
  clearLabel = 'Clear search',
}: SearchInputProps) {
  const hasValue = value.length > 0;

  const handleClear = () => {
    onChange('');
  };

  return (
    <StyledSearchInput>
      <StyledSearchControl
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />

      {!hasValue && (
        <StyledIcon aria-hidden>
          <Search size={18} />
        </StyledIcon>
      )}

      {hasValue && (
        <StyledClear type="button" onClick={handleClear} aria-label={clearLabel}>
          <X size={18} />
        </StyledClear>
      )}
    </StyledSearchInput>
  );
}

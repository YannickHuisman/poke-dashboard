'use client';

import type { MouseEvent } from 'react';

import { useFavourites } from '@/hooks/favourites/useFavourites';
import { useToast } from '@/hooks/ui/useToast';

import { StyledFavouriteButton } from './styles';

const HEART_PATH =
  'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';

function capitalise(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

interface FavouriteButtonProps {
  id: number;
  name: string;
}

export function FavouriteButton({ id, name }: FavouriteButtonProps) {
  const { isFavourite, toggle } = useFavourites();
  const toast = useToast();

  const isOn = isFavourite(id);
  const actionLabel = isOn ? `Remove ${name} from favourites` : `Add ${name} to favourites`;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    toggle(id);
    const displayName = capitalise(name);

    toast.show(
      isOn
        ? `${displayName} is removed from your favourite list`
        : `${displayName} is added to your favourite list`,
    );
  };

  return (
    <StyledFavouriteButton
      type="button"
      $isFavourite={isOn}
      aria-label={actionLabel}
      aria-pressed={isOn}
      title={actionLabel}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill={isOn ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
        focusable="false"
      >
        <path d={HEART_PATH} />
      </svg>
    </StyledFavouriteButton>
  );
}

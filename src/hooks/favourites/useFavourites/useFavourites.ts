'use client';

import { useSyncExternalStore } from 'react';

import {
  getFavouritesServerSnapshot,
  getFavouritesSnapshot,
  subscribeToFavourites,
  toggleFavourite,
} from '@lib/favouritesStore';

/**
 * Every consumer reads the same store, so a heart in the modal and the matching
 * heart on the card update together; no context, no prop drilling.
 */
export function useFavourites() {
  const ids = useSyncExternalStore(
    subscribeToFavourites,
    getFavouritesSnapshot,
    getFavouritesServerSnapshot,
  );

  return {
    ids,
    isFavourite: (id: number) => ids.includes(id),
    toggle: toggleFavourite,
  };
}

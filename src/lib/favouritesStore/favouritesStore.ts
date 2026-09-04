const STORAGE_KEY = 'poke-dashboard:favourites';

const NO_FAVOURITES: number[] = [];
const listeners = new Set<() => void>();

let favourites = NO_FAVOURITES;
let hasLoaded = false;

function load(): void {
  hasLoaded = true;

  try {
    const stored: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]');

    if (Array.isArray(stored)) favourites = stored.filter((id) => typeof id === 'number');
  } catch {
    // Corrupt JSON, or storage blocked outright — keep the empty list.
  }
}

export function getFavouritesSnapshot(): number[] {
  if (!hasLoaded) load();

  return favourites;
}

export function getFavouritesServerSnapshot(): number[] {
  return NO_FAVOURITES;
}

export function subscribeToFavourites(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);

  return () => {
    listeners.delete(onStoreChange);
  };
}

export function toggleFavourite(id: number): void {
  const current = getFavouritesSnapshot();
  const next = current.includes(id) ? current.filter((value) => value !== id) : [...current, id];

  favourites = next;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  listeners.forEach((notify) => notify());
}

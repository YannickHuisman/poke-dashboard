import { MAX_MOVES, officialArtwork, STAT_MAX } from './constants';
import type {
  Pokemon,
  PokemonSummary,
  RawNamedRef,
  RawPokemon,
  RawSpecies,
  Stat,
  StatKey,
} from './types';

const STAT_LABELS: Record<string, StatKey> = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  speed: 'SPD',
};

function idFromUrl(url: string): number {
  const match = url.match(/\/(\d+)\/?$/);

  if (!match) throw new Error(`Could not read a Pokédex id from "${url}"`);
  return Number(match[1]);
}

export function toPokemonSummary(raw: RawNamedRef): PokemonSummary {
  return { id: idFromUrl(raw.url), name: raw.name };
}

export function toPokemon(raw: RawPokemon): Pokemon {
  const stats: Stat[] = [];

  for (const entry of raw.stats) {
    const key = STAT_LABELS[entry.stat.name];
    if (key) stats.push({ key, value: entry.base_stat, max: STAT_MAX[key] });
  }

  stats.push({ key: 'EXP', value: raw.base_experience ?? 0, max: STAT_MAX.EXP });

  const totalMoves = raw.moves.length;
  const shownMoves = totalMoves > MAX_MOVES ? MAX_MOVES - 1 : totalMoves;

  const { other } = raw.sprites;

  const images = [
    officialArtwork(raw.id),
    other.home.front_default,
    other['official-artwork'].front_shiny,
    other.home.front_shiny,
  ].filter((url): url is string => url !== null);

  return {
    id: raw.id,
    name: raw.name,
    types: raw.types.map((entry) => entry.type.name),
    moves: raw.moves.slice(0, shownMoves).map((entry) => entry.move.name),
    hiddenMoves: totalMoves - shownMoves,
    stats,
    images,
  };
}

export function toDescription(raw: RawSpecies): string {
  const entry = raw.flavor_text_entries.find((item) => item.language.name === 'en');

  if (!entry) return '';

  return (
    entry.flavor_text
      // A soft hyphen and the break after it are dropped together, so
      // "it\u00ad\nself" rejoins as "itself". Removing only the hyphen would
      // leave "it self".
      .replace(/\u00ad[\n\f\r]*/g, '')
      .replace(/[\n\f\r]+/g, ' ')
      .trim()
  );
}

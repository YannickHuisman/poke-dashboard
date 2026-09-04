export const theme = {
  colors: {
    red: '#ff0000',
    redDark: '#c8142a',
    redSoft: '#fdecee',
    ink: '#16181d',

    text: '#16181d',
    muted: '#7a808c',

    background: '#eef0f5',
    surface: '#ffffff',
    surfaceSoft: '#f5f6fa',

    border: '#e3e6ed',

    topBar: '#ff0000',
    topBarText: '#ffffff',
    topBarHover: 'rgba(255, 255, 255, 0.16)',
    sidebar: '#ffffff',
    sidebarActive: '#fdecee',

    focus: '#2563eb',
    onAccent: '#ffffff',
    favourite: '#ff0000',

    toast: '#16181d',
    toastText: '#ffffff',
    backdrop: 'rgba(22, 24, 29, 0.5)',
  },

  types: {
    normal: '#9099a1',
    fire: '#ff9d55',
    water: '#5090d6',
    electric: '#f3d23b',
    grass: '#63bc5a',
    ice: '#73cec0',
    fighting: '#ce4069',
    poison: '#ab6ac8',
    ground: '#d97845',
    flying: '#8fa9de',
    psychic: '#f97176',
    bug: '#90c12c',
    rock: '#c7b78b',
    ghost: '#5269ad',
    dragon: '#0b6dc3',
    dark: '#5a5465',
    steel: '#5a8ea1',
    fairy: '#ec8fe6',
  },

  fonts: {
    display: 'var(--font-display), system-ui, sans-serif',
    body: 'var(--font-body), system-ui, sans-serif',
  },

  fontSizes: {
    xs: '12px',
    sm: '13px',
    md: '14px',
    lg: '16px',
    xl: '20px',
    display: '28px',
  },

  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  radius: {
    sm: '6px',
    md: '14px',
    lg: '20px',
    pill: '999px',
  },

  glass: {
    toolbar: 'rgba(238, 240, 245, 0.72)',
    surface: 'rgba(255, 255, 255, 0.72)',
    surfaceStrong: 'rgba(255, 255, 255, 0.92)',
    blur: 'blur(16px) saturate(180%)',
  },

  shadows: {
    card: '0 1px 2px rgba(22, 24, 29, 0.04), 0 6px 16px rgba(22, 24, 29, 0.06)',
    cardHover: '0 2px 4px rgba(22, 24, 29, 0.06), 0 16px 32px rgba(22, 24, 29, 0.14)',
    bar: '0 1px 3px rgba(22, 24, 29, 0.08), 0 8px 24px rgba(22, 24, 29, 0.08)',
    float: '0 24px 64px rgba(22, 24, 29, 0.28)',
    inset: 'inset 0 1px 3px rgba(22, 24, 29, 0.07)',
  },

  durations: {
    fast: '150ms',
    base: '220ms',
  },

  easings: {
    /* Decelerating curve for anything that lifts or slides into place. */
    lift: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },

  layout: {
    topBarHeight: '60px',
    sidebarWidth: '232px',
    mainPadding: '24px',
  },

  breakpoints: {
    mobile: 768,
  },
} as const;

export type Theme = typeof theme;
type PokemonType = keyof Theme['types'];

/**
 * Colour for a Pokémon type name, falling back to `normal` for anything the
 * theme does not know. The API returns type names as plain strings, so the
 * narrowing and the fallback live here rather than at each call site.
 */
export function typeTone(theme: Theme, type: string | undefined): string {
  return theme.types[type as PokemonType] ?? theme.types.normal;
}

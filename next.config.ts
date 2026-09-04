import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    /*
     * GitHub serves the sprites with `cache-control: max-age=300`, so the
     * optimizer would re-fetch every one of them every five minutes. Sprite
     * files are immutable — the artwork for id 25 never changes — so the floor
     * is raised to 30 days. Next uses max(minimumCacheTTL, upstream max-age).
     */
    minimumCacheTTL: 60 * 60 * 24 * 30,

    // Sprite URLs are derived from the Pokédex id rather than fetched, so the
    // host has to be allowlisted for next/image up front.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/PokeAPI/sprites/**',
      },
    ],
  },
};

export default nextConfig;

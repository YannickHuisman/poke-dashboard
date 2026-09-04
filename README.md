# Pokédex

A Pokédex built for a frontend assessment. Browse Pokémon, search by name or
number, open a card to see details and stats, and keep a list of favourites that
survives a reload.

Data comes from [PokéAPI](https://pokeapi.co/). There's no backend, no database
and no auth. The API is called straight from the client.

## Running it

```sh
pnpm install
pnpm dev
```

Then open http://localhost:3000.

Other scripts: `pnpm build`, `pnpm start`, `pnpm typecheck`, `pnpm lint`,
`pnpm format`.

Built with pnpm 10 and Node 22.

## Stack

- Next.js 15 (App Router) + React 19, TypeScript
- styled-components, with the SSR registry so there's no unstyled flash
- TanStack Query for the API data

## A few choices worth explaining

**The stat maxima contradict the wireframe.** The brief's text says HP 200,
ATK 150, DEF 200, SPD 150, EXP 300, but the wireframe draws `165 / 300`,
`181 / 300`, `161 / 300`, `206 / 300` and `465 / 1000`. I went with the text,
since that's the explicit spec, and used five bars because that's what both the
wireframe and the stated maxima show.

**Two kinds of state, two mechanisms.** API data is cached by TanStack Query
with `staleTime: Infinity`, because a Pokémon never changes. Favourites are held
in a small store of my own and persisted to `localStorage`, because that's the
one thing that has to survive a reload. The two never mix. I don't cache API
responses in storage, and favourites aren't a query.

**The grid makes no per-card requests.** Sprite URLs are derived from the
Pokédex id, so 40 cards render from a single list call. The detail and species
requests only fire when a modal opens.

**No validation library.** The API is public, read-only and stable, and the only
user input is a local filter string. A hand-written mapper narrows the response
to the shape the UI needs, at no runtime cost.

## What I'd add next

- A focus trap in the modal (Tab currently escapes into the page behind it)
- Unit tests for the three things above

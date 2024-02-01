# Minesweeper Comparisons

## Introduction

Minesweeper can be a great foundation for comparing different programming environments, frameworks, and paradigms. It can be built in many ways, using a variety of mechanisms.

This repository will serve as a workspace for building Minesweeper using different combinations of frontend frameworks, backend frameworks, and data stores.

The ideal outcome will be a clear delineation of the pros and cons of each combination, and a clear understanding of the trade-offs involved in each.

### Potential Features

- The game.
- Saved history of previous games.
- Public leaderboard.
- Collaborative real-time play.
- Real-time chat.
- Configurable game settings.
- Notifications.
- User accounts.

## Implementations

| Name                         | Technologies                    | Stage       |
| ---------------------------- | ------------------------------- | ----------- |
| react-parcel-vanilla-extract | React, Parcel, Vanilla Extract  | In Progress |
| vue                          | Vue, Vite                       | Upcoming    |
| laravel-vue-real-time        | Laravel, Vue, Vite, Web Sockets | Upcoming    |

## Reference

These are known frameworks at the time of writing. Implementations for all will be unlikely, but the goal is to cover a wide range of options that delineates trade-offs clearly. For example, implementing Minesweeper in React versus Preact is unlikely to yield much insight, but implementing it in React and Svelte would.

Items annotated with a star (⭐️) are of chief interest.

### Frontend Frameworks and Libraries

- [Alpine](https://alpinejs.dev/)
- [Angular](https://angular.io/)
- [HTMX](https://htmx.org/)
- [Inertia](https://inertiajs.com/) ⭐️
- [Lit](https://lit.dev/) ⭐️
- [Livewire](https://livewire.laravel.com/)
- [Preact](https://preactjs.com/)
- [Qwik](https://qwik.dev/)
- [React](https://react.dev/) ⭐️
- [Solid](https://www.solidjs.com/)
- [Svelte](https://svelte.dev/) ⭐️
- Vanilla JavaScript
- [Vue](https://vuejs.org/) ⭐️

### Backend Frameworks

For the purposes of this project, batteries-included frameworks (e.g. Laravel, Rails, Django) are of greater interest than minimalist frameworks (Next.js, Sveltekit, Remix).

#### Battieries-Included

- [Adonis](https://adonisjs.com/)
- [Django](https://www.djangoproject.com/)
- [Laravel](https://laravel.com/) ⭐️
- [Nest](https://nestjs.com/)
- [Redwood](https://redwoodjs.com/) ⭐️
- [Ruby on Rails](https://rubyonrails.org/) ⭐️

#### Minimalist

- [Hono](https://hono.dev/)
- [Next](https://nextjs.org/)
- [Nuxt](https://nuxt.com/)
- [Remix](https://remix.run/)
- [Deno Fresh](https://fresh.deno.dev/)
- Service Worker (Progressive Web App) ⭐️
- [SvelteKit](https://kit.svelte.dev/)
- [tRPC](https://trpc.io/)

### Data Stores

- Browser IndexedDB
- Browser Local Storage
- File System
- PostgreSQL ⭐️
- Redis ⭐️
- Sqlite

### Real-time Technologies

Using a real-time technology in conjuction with [CRDTs][crdt-wikipedia].

- Long Polling
- Server Sent Events
- Web Sockets ⭐️
- WebRTC ⭐️

### Bundlers

- [esbuild](https://esbuild.github.io/)
- **[Parcel](https://parceljs.org/)**
- [SWC](https://swc.rs/)
- [Turbopack](https://turbo.build/pack)
- **[Vite](https://vitejs.dev/)**

### Miscellaneous Libraries

- [Vanilla Extract](https://vanilla-extract.style/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Tailwind](https://tailwindcss.com/)

## Minesweeper Rules

### Game Description

The game board is a rectangular grid; placed randomly within the grid are “mines”. (The grid size and number of mines are user-configurable but default to 8×8 with 10 mines.)

Initially, all grid squares are “hidden”.

The player chooses one square at a time to “reveal”. If the square contains a mine, the player loses and the game is over.

Otherwise, the square is changed to show the total number of immediate neighbor squares (diagonal and orthogonal) that contain mines (with a maximum of 8). If no neighboring squares contain mines (i.e., the count for this square is 0), then all neighboring squares are automatically revealed. (And if one of those squares has no neighbors that are mines, then all its neighbors are automatically revealed, and so on.)

The player can choose to “flag” a square that they think might contain a mine. This has no impact on game play; it is just to help the player record their guesses.

When the player has revealed every non-mine square, they win.

### Minimal Game Functionality

- Create data structures to represent an 8×8 grid
- Lay 10 mines in random locations
- For each square, calculate the total number of immediate neighbors that contain mines
- Display the board to the user (with all squares “hidden”)
- Accept user input to reveal or flag a square
  - If the square is a mine, the game is over
  - If the square has non-zero mine neighbors, display its count
  - If the square has zero mine neighbors, reveal all adjacent squares
- Repeat until the player has revealed all non-mine squares

[crdt-wikipedia]: https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type

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

| Name                  | Technologies                    | Stage    |
| --------------------- | ------------------------------- | -------- |
| react-vanilla-extract | React, Vite, Vanilla Extract    | Upcoming |
| vue                   | Vue, Vite                       | Upcoming |
| laravel-vue-real-time | Laravel, Vue, Vite, Web Sockets | Upcoming |

## Reference

These are known frameworks at the time of writing. Implementations for all will be unlikely, but the goal is to cover a wide range of options that delineates trade-offs clearly. For example, implementing Minesweeper in React versus Preact is unlikely to yield much insight, but implementing it in React and Svelte would.

Items annotated in **bold** are of chief interest.

### Frontend Frameworks and Libraries

- Alpine
- Angular
- HTMX
- **Inertia**
- **Lit**
- Livewire
- Preact
- Qwik
- **React**
- Solid
- **Svelte**
- Vanilla JavaScript
- **Vue**

### Backend Frameworks

For the purposes of this project, batteries-included frameworks (e.g. Laravel, Rails, Django) are of greater interest than minimalist frameworks (Next.js, Sveltekit, Remix).

#### Battieries-Included

- Adonis
- Django
- **Laravel**
- Nest
- **Rails**
- **Redwood**

#### Minimalist

- Hono
- Next
- Nuxt
- Remix
- Deno Fresh
- **Service Worker (Progressive Web App)**
- SvelteKit
- tRPC

### Data Stores

- Browser IndexedDB
- Browser Local Storage
- File System
- **PostgreSQL**
- **Redis**
- Sqlite

### Real-time Technologies

Using a real-time technology in conjuction with [CRDTs][crdt-wikipedia].

- Long Polling
- Server Sent Events
- **Web Sockets**
- **WebRTC**

### Bundlers

- esbuild
- **Parcel**
- SWC
- Turbopack
- **Vite**

### Miscellaneous Libraries

- Vanilla Extract
- CSS Modules
- Tailwind

[crdt-wikipedia]: https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type

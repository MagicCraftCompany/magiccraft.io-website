# MagicCraft website

Public website and integration hub for the MagicCraft game, AI product suite, game services, optional Web3 systems, creator tools, MCRT guides, programs, and living whitepaper.

Production: [magiccraft.io](https://magiccraft.io/)

Future agents and contributors should read:

- [AGENTS.md](AGENTS.md) for ownership, truth, safety, testing, and release rules.
- [ARCHITECTURE.md](ARCHITECTURE.md) for the route map, product model, functions, external dependencies, and change recipes.
- [MagicCraft function sweep](docs/MAGICCRAFT_FUNCTION_SWEEP_TODO.md) for dated functional evidence and unfinished work.
- [MagicCraft design plan](docs/MAGICCRAFT_DESIGN_CONCEPT_TODO.md) for the current product concept and design backlog.

## Stack

- React 18 and TypeScript
- Vite
- React Router
- Tailwind CSS, styled-components, and Framer Motion
- Netlify hosting and Functions
- Sanity for blog content
- Vitest and Testing Library

## Quick start

Use Node 20, matching CI.

```bash
npm ci
npm run dev
```

The development server binds to the local network through Vite's `--host` option.

## Quality checks

```bash
npx tsc --noEmit
npm run lint
npm test
npm run build
```

`npm run build` compiles TypeScript, creates the Vite production bundle, and generates route-specific HTML shells for priority SEO routes.

## Commands

| Command                  | Purpose                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------- |
| `npm run dev`            | Start Vite development server                                                      |
| `npm run test:watch`     | Run Vitest in watch mode                                                           |
| `npm test`               | Run the test suite once                                                            |
| `npm run lint`           | Run ESLint with zero warnings allowed                                              |
| `npm run build`          | Build `dist/` and route shells                                                     |
| `npm run preview`        | Preview the production bundle                                                      |
| `npm run deploy:preview` | Build and publish a Netlify draft deploy                                           |
| `npm run deploy:prod`    | Direct recovery deploy that mutates `src/version.ts`; not the routine release path |

## Configuration

Copy `.env.example` for local names and keep real values out of git.

Common variables:

- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_API_VERSION`
- `OPENROUTER_API_KEY`
- `OPENROUTER_MODEL`
- `GAMESERVER_API_URL`
- `GAMESERVER_API_PORT`
- `GAMESERVER_API_KEY`
- `GAMESERVER_API_TIMEOUT_MS`
- `LOBBY_STATS_URL`
- `LOBBY_API_TIMEOUT_MS`
- `MARKET_API_TIMEOUT_MS`
- `GRANTS_FORM_ENDPOINT`
- `GRANTS_FORM_TIMEOUT_MS`
- `MCRT_MENTIONS_REQUEST_TIMEOUT_MS`
- `MCRT_MENTIONS_TOTAL_TIMEOUT_MS`
- `MCRT_MENTIONS_MAX_HOSTS`

See [AGENTS.md](AGENTS.md#environment-variables) for ownership and safety notes. Any `VITE_` variable is client-visible after bundling and must not contain a privileged secret.

## Deployment

The canonical repository is `MagicCraftCompany/magiccraft.io-website`. A push to `main` runs GitHub Actions and normally triggers the connected Netlify production deploy. Use this tested Git path for routine releases.

`npm run deploy:prod` increments a tracked build revision and deploys the current working tree directly through `npx netlify`. Reserve it for an explicitly reviewed direct deploy or recovery.

A release is complete only after:

1. Type-check, lint, tests, and build pass.
2. GitHub Actions passes for the exact commit.
3. Netlify publishes the exact commit.
4. The changed routes, assets, functions, and mobile and desktop behavior are verified on `https://magiccraft.io/`.

CI or a local build alone is not production proof.

## Sanity Studio

The app registers `/admin/*` as the Sanity Studio handoff. Blog queries live in `src/lib/sanity/`, and schemas live under `sanity-studio/`. Do not put a privileged Sanity write token in a public Vite variable.

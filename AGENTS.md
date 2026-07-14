# AGENTS.md: MagicCraft website

Read this file before changing the repository. Read [ARCHITECTURE.md](ARCHITECTURE.md) before changing routes, product claims, live data, external integrations, deployment, or the whitepaper.

## What this repository owns

This is the source repository for the public MagicCraft website at `https://magiccraft.io/`.

It owns:

- The public game and studio presentation.
- The MagicCraft route shell and shared navigation.
- The game, AI product, Web3, builder, legal, news, program, and support pages registered in `src/App.tsx`.
- The public product catalogs in `src/data/aiProducts.ts` and `src/data/ecosystemSystems.ts`.
- The website's Netlify Functions in `netlify/functions/`.
- Static gameplay media and official AI product marks in `public/`.
- The living website whitepaper in `src/pages/Whitepaper.tsx`.
- Netlify redirects, route shells, response headers, and CI checks.

It does not own the runtime code for the MagicCraft game, Web3 lobby, marketplace, pledging app, exchanges, wallets, AI products, MCRTPay, EnvRouter, app stores, Steam, Sanity, CoinGecko, DexScreener, OpenRouter, or Cloudinary. Those are linked or queried systems. A change here cannot prove or repair an independent service unless this repository also owns the failing integration seam.

## Product concept

The public concept is:

> Play the game. Put AI to work.

The site presents one studio with two primary entry paths:

1. Play MagicCraft, a live cross-platform fantasy game with established PvP and newer PvE experiences.
2. Use the focused AI product suite: Merlin AI, Akyn, MagicAds, MAGAS7, DragonList, and DocAI.

Game services, optional Web3 utility, MCRT access, creator tools, and infrastructure sit below those two pillars. Do not turn the homepage back into a token-first or investment-first site. Do not imply that the free game or the AI products require a wallet.

## Source-of-truth files

Update the source, not a duplicated rendering:

| Concern                                                                       | Primary source                                                                                  |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Client routes                                                                 | `src/App.tsx`                                                                                   |
| Document shell, analytics, Google Translate, MagicAds, and Netlify form stubs | `index.html`                                                                                    |
| Header and mobile navigation                                                  | `src/components/Header/Header.tsx`                                                              |
| Footer                                                                        | `src/components/Footer/Footer.tsx`                                                              |
| Homepage composition                                                          | `src/pages/Homepagemcrt.tsx`                                                                    |
| AI product names, purposes, URLs, status, logos, and safety notes             | `src/data/aiProducts.ts`                                                                        |
| Game, Web3, and builder system cards                                          | `src/data/ecosystemSystems.ts`                                                                  |
| Gameplay video and screenshots                                                | `src/data/gameplayMedia.ts` plus `public/gameplay/`                                             |
| AI product logos                                                              | `public/ai-logos/`                                                                              |
| Game stats client contract                                                    | `src/lib/useGameStats.ts`                                                                       |
| Game stats server aggregation                                                 | `netlify/functions/game-stats.ts`                                                               |
| MCRT price contract                                                           | `src/lib/useMcrtPrice.ts` and `netlify/functions/mcrt-price.ts`                                 |
| Battle-pass proxy                                                             | `src/hooks/useBattlePass.ts` and `netlify/functions/battlepass.ts`                              |
| Service status                                                                | `src/components/Header/StatusIndicator.tsx` and `netlify/functions/status.ts`                   |
| Lobby discovery                                                               | `src/pages/Lobbies.tsx`                                                                         |
| AI support chat                                                               | `src/components/LiveSupport/LiveSupportWidget.tsx` and `netlify/functions/live-support-chat.ts` |
| Grant intake                                                                  | `src/pages/Grants.tsx` and `netlify/functions/submit-grants.ts`                                 |
| Whitepaper                                                                    | `src/pages/Whitepaper.tsx`                                                                      |
| Netlify routes and headers                                                    | `netlify.toml`                                                                                  |
| Route-specific SEO shells                                                     | `scripts/generate-route-shells.mjs`                                                             |
| Public crawl map                                                              | `public/sitemap.xml` and `public/robots.txt`                                                    |
| Release revision                                                              | `src/version.ts` and `scripts/bump-build-rev.mjs`                                               |

`docs/MAGICCRAFT_FUNCTION_SWEEP_TODO.md` and `docs/MAGICCRAFT_DESIGN_CONCEPT_TODO.md` are detailed execution ledgers. They contain dated evidence and unfinished work, not permanent runtime truth. Re-verify any status before acting on it.

## Truth rules

These rules prevent the most damaging regressions:

1. Live truth beats repo intent. Verify the public URL and the meaningful rendered behavior before calling something working.
2. HTTP 200 only proves that a response was returned. It does not prove authentication, gameplay, wallet signing, payment, form delivery, publishing, or persistence.
3. CI green only proves the checked commit passed CI. It does not prove Netlify published that commit.
4. Show `unavailable`, `partial`, `stale`, or an em dash when a source is missing. Never invent activity, balances, rewards, rankings, season data, health, or fallback totals.
5. Product status belongs in the typed catalogs. Do not add public `degraded` warnings or internal diagnostic paragraphs to marketing cards. Fix the owned problem, hide an unfit destination, or describe a limited public capability in clear user language.
6. Do not claim a shared MagicCraft account, billing system, wallet, memory store, or data layer across independent products unless it is implemented and verified.
7. Do not describe MCRT as guaranteed income, passive income, a fixed return, or an investment promise. Web3 participation is optional and product-specific.
8. Use official gameplay captures for gameplay. Do not present generated concept art as a real game screenshot.
9. Use the official product marks in `public/ai-logos/`. Preserve each logo's aspect ratio and accessible label.
10. Keep the MagicAds banner live. Improve its placement, height reservation, responsiveness, or styling instead of removing it.
11. Do not expose API keys, wallet secrets, private endpoints, test identities, or internal diagnostics in client code, docs, screenshots, or commits.
12. Do not test a real swap, purchase, pledge, claim, grant submission, outbound email, wallet signature, or paid AI action without explicit authority and a safe test identity.

## Routing contract

The browser app uses React Router, while Netlify owns public rewrites and redirects.

When adding or changing an indexable route:

1. Update `src/App.tsx`.
2. Update navigation and footer only if the route should be discoverable.
3. Update `netlify.toml` if the route needs a redirect, static handoff, or function rewrite.
4. Add or change a route shell in `scripts/generate-route-shells.mjs` when route-specific HTML metadata matters.
5. Update `public/sitemap.xml` when crawlability changes.
6. Add route, navigation, metadata, empty-state, and error-state tests as appropriate.
7. Build, then inspect the generated `dist/<route>/index.html` when a route shell is involved.

Important exceptions:

- `/dashboard` redirects to `/stats` in the client.
- `/buy-mcrt`, `/buy`, and `/get-mcrt` redirect to `/pricing` at Netlify and also resolve to the Pricing component in the client.
- `/contact-us` is currently forced to `public/contact-us/index.html`; `src/pages/ContactUs.tsx` is a second implementation and can drift.
- The catchall returns the app shell with status 200. A browser render is required to prove a route or 404 page.

## Data and integration contract

- `game-stats.ts` combines independent game-server, lobby-stat, and market sources. Partial success is valid and must remain visible as partial.
- `useGameStats.ts` keeps the last good result during a failed refresh and marks it stale. Do not silently relabel it live.
- `mcrt-price.ts` uses CoinGecko first, DexScreener second, and a short in-memory cache. A stale cached response must stay identifiable.
- `battlepass.ts` is a bounded server-side proxy. Browser code must not receive the game-server API key.
- `Lobbies.tsx` reads the public schedule and hands wallet-controlled entry or claims to the official lobby. Do not recreate balances, entry eligibility, or claims in this site.
- `status.ts` distinguishes core services from optional dependencies. An anti-bot response from an exchange is not automatically a global outage.
- `live-support-chat.ts` uses OpenRouter and supplies MagicCraft-specific public context. Keep its responses bounded and never place the OpenRouter key in browser code.
- `submit-grants.ts` is an external submission workflow. A success page is not delivery proof unless the upstream accepted the submission.
- `mcrt-mentions.ts` scrapes best-effort public sources with time budgets. It is not a reliable social-data system of record.

## Development and verification

Use Node 20, matching CI.

```bash
npm ci
npm run dev
npx tsc --noEmit
npm run lint
npm test
npm run build
```

Before shipping a meaningful UI or route change, also verify:

- Desktop and mobile rendering, especially 390px mobile and 1440px desktop.
- Header drawer scrolling, focus containment, Escape, focus return, and iOS safe areas.
- The fixed mobile action bar does not cover content.
- The MagicAds slot does not cause layout shift.
- Loading, empty, partial, stale, unavailable, and network-error states.
- Internal links stay in the router and external links identify their handoff.
- Public media URLs, official logos, canonical tags, and social images load.

## Deployment

The canonical remote is `MagicCraftCompany/magiccraft.io-website`. Main-branch pushes run GitHub Actions and normally trigger the connected Netlify site. That tested Git path is the routine release path.

`npm run deploy:prod` is a recovery or explicitly chosen direct-deploy path, not the routine path. It increments tracked `src/version.ts`, builds whatever is in the working tree, and invokes an unpinned Netlify CLI through `npx`. Review and commit the revision change if this command is deliberately used.

Normal release proof is:

1. Review `git status` and preserve unrelated user work, including untracked `.codex-*` evidence directories.
2. Run type-check, lint, tests, and production build.
3. Commit only the intended files and push `main`.
4. Confirm the GitHub Actions run passed for the exact commit.
5. Confirm Netlify published the exact commit, or use the scoped production deploy command when the Git integration is not sufficient.
6. Verify `https://magiccraft.io/` and each changed public route in a rendered desktop and mobile browser.
7. Verify the changed asset or function directly when relevant.

Do not call a change live because `npm run build` passed or because GitHub accepted the push. A prior production incident left CI green while the Netlify control plane served a site-level 404. Public apex, asset, route, and function checks are the final acceptance surface.

## Environment variables

Names only belong in git. Values belong in Netlify or a local ignored file.

| Variable                           | Used for                                                                            |
| ---------------------------------- | ----------------------------------------------------------------------------------- |
| `VITE_SANITY_PROJECT_ID`           | Public Sanity project configuration                                                 |
| `VITE_SANITY_DATASET`              | Public Sanity dataset name                                                          |
| `VITE_SANITY_API_VERSION`          | Sanity API date                                                                     |
| `VITE_SANITY_API_TOKEN`            | Legacy client reference; do not configure it because Vite exposes it in the browser |
| `OPENROUTER_API_KEY`               | Server-side live support                                                            |
| `OPENROUTER_MODEL`                 | Optional live-support model override                                                |
| `GAMESERVER_API_URL`               | Optional server-side game API override                                              |
| `GAMESERVER_API_PORT`              | Game API port, default currently 8903                                               |
| `GAMESERVER_API_KEY`               | Server-side game API authentication                                                 |
| `GAMESERVER_API_TIMEOUT_MS`        | Battle-pass/game-server time budget                                                 |
| `LOBBY_STATS_URL`                  | Optional lobby statistics override                                                  |
| `LOBBY_API_TIMEOUT_MS`             | Lobby statistics time budget                                                        |
| `MARKET_API_TIMEOUT_MS`            | Market data time budget                                                             |
| `GRANTS_FORM_ENDPOINT`             | Grant-intake destination                                                            |
| `GRANTS_FORM_TIMEOUT_MS`           | Grant-intake time budget                                                            |
| `VITE_USE_MOCK_BATTLEPASS`         | Development-only battle-pass fixture opt-in                                         |
| `MCRT_MENTIONS_REQUEST_TIMEOUT_MS` | Per-host social-mention time budget                                                 |
| `MCRT_MENTIONS_TOTAL_TIMEOUT_MS`   | Total social-mention time budget                                                    |
| `MCRT_MENTIONS_MAX_HOSTS`          | Maximum social mirrors attempted                                                    |

Check the consuming file before adding a variable. Do not assume that a similar name is supported.

## Working discipline for future agents

- Start with the smallest authoritative files in the table above.
- Inspect recent commits before reversing a product or design decision.
- Treat `src/pages/Homepagemcrt.tsx` as the current homepage. `/magiccraft` is a separate, older long-form game page.
- Do not revive the unused local leaderboard, top-holder, or homepage-card placeholder components as live data.
- Preserve unrelated dirty and untracked work.
- Use bounded read-only checks for independent services.
- Separate `local`, `committed`, `pushed`, `CI green`, `deployed`, and `live verified` in reports.
- Update `ARCHITECTURE.md` when the system boundary, route model, runtime dependency, or deployment process changes.
- Update the whitepaper and shared catalogs together when a public product fact changes.
- End with evidence: exact commit, checks, deployment state, and public behavior.

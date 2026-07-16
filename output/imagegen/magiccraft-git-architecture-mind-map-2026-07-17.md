# Inside the MagicCraft Git

Architecture snapshot: 17 July 2026, Bangkok time.

## Public story

**MagicCraft** is the public game and AI studio website at `magiccraft.io`.

**Play the game. Put AI to work.**

This Git owns the public website, routes, product catalogs, serverless integration code, local media, whitepaper, redirects, security headers, SEO generation, tests, and CI configuration. It connects to the game, lobby, marketplace, pledging, wallets, exchanges, independent AI products, builders, data providers, CMS, model provider, media CDN, and Netlify control plane. Those connected runtimes are not owned by this Git.

## Whole-repository mind map

### 1. Purpose and people

- Players, creators, operators, and the MagicCraft community
- A live cross-platform fantasy game with established PvP and newer PvE
- Six focused AI products
- Optional Web3 and MCRT paths that are not required for the base game or AI products

### 2. Public experiences

- Game and studio: Home, MagicCraft, Heroes, Lobbies, Stats, Leaderboard, Server, Whitepaper
- Content and help: FAQ, Patch, News, Blog, Contact
- Programs: Build on MagicCraft, Bounties, Grants, Careers, Guilds
- Trust and MCRT: Pricing, Verify, Top Holders, Terms, Privacy, Disclaimer
- Current code contains 32 React Router declarations across 28 page modules

### 3. Shared product truth

- AI suite: Merlin AI, Akyn, MagicAds, MAGAS7, DragonList, DocAI
- Game services: Game Stats, Leaderboard, Web3 Lobbies
- Optional Web3: Marketplace, Pledging, MCRT Utility
- Creators and infrastructure: MCRT Game Maker, MCRTPay, EnvRouter AI
- Official gameplay video, four local gameplay captures, and six official AI product marks

### 4. Owned website stack

- `src/`: React 18, TypeScript, Vite, React Router, pages, components, data, hooks, and client libraries
- Styling: Tailwind, global CSS, styled-components, Framer Motion
- Shared shell: Header, footer, mobile action bar, scroll restoration, and global support widget
- `public/`: gameplay, logos, social art, icons, sitemap, robots, and the static contact route
- `sanity-studio/`: blog content studio and schemas

### 5. Serverless data flows

- Seven Netlify Functions own bounded integrations
- Game stats combine GameServer, lobby statistics, and CoinGecko with source-level truth states
- MCRT price uses CoinGecko, then DexScreener, then an explicitly stale cache
- Lobby discovery reads the public schedule and hands wallet actions to the official lobby
- Live support sends bounded public MagicCraft context to OpenRouter
- Grants validate and forward intake to the configured upstream
- Status and MCRT mentions are best-effort checks, not system-of-record data
- Truth states: loading, live, partial, stale, offline, unavailable, empty, unknown or restricted

### 6. Build, delivery, and trust

- `npm run build`: TypeScript, Vite, five route-specific SEO shells, then `dist/`
- GitHub Actions: install, type-check, lint, 84 tests across 23 test files, then build
- Netlify: function rewrites, canonical redirects, SPA fallback, CSP, HSTS, frame denial, referrer and permissions policies
- Release truth: local change, checks, commit, push, CI, Netlify deploy, rendered production proof
- Server-side secrets stay outside browser code
- No fabricated stats, guaranteed MCRT returns, or unapproved wallet and transaction tests

### 7. Connected ecosystem, not owned here

- Game clients: iOS, Android, Steam, HyperPlay
- Lobby, marketplace, pledging, exchanges, wallets, and explorers
- AI products: Merlin AI, Akyn, MagicAds, MAGAS7, DragonList, DocAI
- Builders: MCRT Game Maker, MCRTPay, EnvRouter AI
- Providers: GameServer, CoinGecko, DexScreener, OpenRouter, Sanity, Cloudinary, Netlify

## Current 80/20 improvement list

1. **Critical: reduce production dependency risk.** The current production audit reports 152 findings: 7 critical, 27 high, 94 moderate, and 24 low. The unused direct `@xswap-link/sdk` dependency carries much of the wallet and cryptography tree. `swiper` is used only by an unreferenced testimonial component. Remove truly unused dependencies first, then upgrade React Router and the remaining runtime packages in tested batches.
2. **Critical: repair PR 5 CI before merge.** The open subpage design refresh fails because `IntersectionObserver` is not defined in the shared test environment, even though a Netlify preview deployed. Add a faithful global test mock, make the reveal primitive degrade safely, and keep green CI as a merge gate.
3. **Critical, upstream: restore full game data.** The live GameServer check still times out, so production game statistics are correctly partial. Expose the owned GameServer route over approved HTTPS port 443 or establish the required Netlify egress path.
4. **High: create one typed route registry and real 404 behavior.** Generate client routes, navigation, Netlify redirects, SEO shells, and sitemap entries from one source. Priority route metadata is not consistently served in production, and the SPA catchall turns invented paths into HTTP 200 soft 404s.
5. **Critical: prove the exact deployed commit.** Emit a non-secret version file or response header with Git SHA and build time, then add post-deploy route, asset, redirect, and function smoke checks. CI green and Netlify published are separate states.
6. **High: replace per-visitor status fan-out with cached owned health.** Cache core status for a few minutes, check owned services by default, and move broad third-party reachability checks into explicit deep diagnostics. This reduces slow timeouts and anti-bot false negatives.
7. **Critical: harden paid live support and remove product-copy drift.** Add durable rate limiting, abuse protection, request and cost budgets, bounded upstream reads, and tests for timeouts and malformed responses. Generate public product context from the typed catalog instead of maintaining a second hardcoded truth source.
8. **High: tighten CSP and gate optional third-party tracking.** Inventory real runtime domains, remove obsolete permissions, move toward nonces or hashes, and add region-appropriate consent before optional analytics, translation, and advertising scripts.
9. **Parallel: cut asset and legacy-code weight.** The source tree contains about 37 MB across `public/` and `src/assets/`, including raster-filled SVGs and a 1.15 MB PNG in the production bundle. Convert active media, subset fonts, and delete only assets and components proven unused.
10. **Parallel: add real-browser accessibility and performance gates.** Add a small Playwright and axe matrix plus Lighthouse budgets and post-deploy rendered smoke checks. Cover the mobile drawer, routes, contact, soft 404, loading and error states, reduced motion, and safe areas.

## Social image structure

Center node:

**MAGICCRAFT.IO**
Public game + AI studio website and integration hub

Seven branches:

1. Purpose and People
2. Public Experiences
3. Shared Product Truth
4. Owned Website Stack
5. Live Data Flows
6. Connected Ecosystem
7. Delivery, SEO and Trust

Use solid cyan, violet, and gold paths for code owned in this Git. Use dashed paths and the label **CONNECTED, NOT OWNED HERE** for independent systems.

## Social copy

### X

Inside the MagicCraft Git. One public hub connects a live cross-platform game, six focused AI products, game services, creator tools and optional Web3, backed by 32 routes, 7 serverless functions and 84 tests. Play the game. Put AI to work. magiccraft.io #MagicCraft #Gaming #AI

### Instagram

Inside the MagicCraft ecosystem. One public hub connects the live game, six focused AI products, game services, creator tools and optional Web3. Behind it: 32 route declarations, 7 serverless functions, source-backed live data, official gameplay media, Sanity content, SEO shells, tests, CI and Netlify delivery.

Play the game. Put AI to work.

Explore: magiccraft.io

#MagicCraft #Gaming #MOBA #AI #GameDev #Web3

### Alt text

Dark navy MagicCraft Git architecture mind map with the white MagicCraft wordmark above “Play the game. Put AI to work.” Seven cyan, violet, and gold branches map purpose and users, public routes, product catalogs, the React website stack, Netlify data flows, connected external systems, and the SEO, test, CI, and delivery foundation. Solid paths mean code owned in this Git. Dashed paths mean connected systems that are not owned here.

## Public claim guardrails

- Spell the brand **MagicCraft**, never MagiCraft or Magic Craft.
- The six-product catalog is Merlin AI, Akyn, MagicAds, MAGAS7, DragonList, and DocAI.
- Do not say every AI product is live. The current catalog contains four Live products, one Early access product, and one Beta product.
- Do not imply shared accounts, billing, wallets, memory, or data across products.
- Do not imply the game or AI products require a wallet.
- Do not claim that MCRT powers every AI product or offers income, passive income, guaranteed rewards, or fixed returns.
- Do not present generated art as a gameplay screenshot.
- Do not use the stale Polybilities, SocialMM, Rent, or token-first system map.

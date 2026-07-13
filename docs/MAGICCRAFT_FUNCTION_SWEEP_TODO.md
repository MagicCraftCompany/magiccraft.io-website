# MagicCraft function sweep: three-pass 80/20 backlog

Last audited: 13 July 2026, 22:04 ICT
Scope: every route registered in `src/App.tsx`, every current or screenshot-listed drawer destination, the public AI product suite, and the Netlify functions that support those pages.

This is an execution ledger, not a claim that the local working tree is live. Production reachability below was checked read-only against `https://magiccraft.io` and the linked public sites. An HTTP 200 proves only that a URL returned a page; it does not prove sign-in, gameplay, wallet, payment, form delivery, or an authenticated product workflow.

## Current execution update

This table supersedes older `LOCAL-PENDING` wording elsewhere in the ledger. It
records the latest evidence from the 13 July 2026 redesign and product sweep.

| Surface                                 | Current state   | Evidence and next action                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MagicCraft homepage and Whitepaper v3.2 | `LIVE-RENDERED` | Commit `8a29c085` is pushed and published by Netlify deploy `6a54fc3e4a9d330008c40a5f`. The balanced game-and-AI concept, truthful system map, Whitepaper v3.2, responsive drawer, route shells, and stable 36px MagicAds slot were rechecked on production.                                                                                                          |
| Game Stats                              | `LIVE-PARTIAL`  | Production renders verified lobby and market data: 322,766 lobbies, 28,166 users, 100,642 finished lobbies, and 145.83M MCRT entry fees. The repaired `8903` default is deployed, but Netlify still times out reaching that custom port, so season fields remain explicitly unavailable. Expose the GameServer route over approved HTTPS 443 or allow Netlify egress. |
| Leaderboard                             | `LIVE-RENDERED` | Anonymous all-time, monthly, and weekly views load with 50, 5, and 2 rows respectively. A background wallet-library error does not block public rankings.                                                                                                                                                                                                             |
| Web3 Lobbies                            | `KNOWN-BROKEN`  | Match browsing works, but the removed prize-pool backend returns 404 and the old bundle substitutes fallback balances. Anonymous wallet preloading also errors. Recover the owning source before repair.                                                                                                                                                              |
| Pledging                                | `KNOWN-BROKEN`  | Contracts and read-only values are healthy, but the deployed CRA frontend times out through one RPC and shows 0 TVL plus blank rates. The matching deployed source is missing; the accessible Vite rewrite is unfinished and must not be substituted.                                                                                                                 |
| Ecosystem Games                         | `KNOWN-BROKEN`  | Five game shells and canonical legal routes return 200, but the home has no H1, uses weak/investment copy, has broken footer controls, and is dated 2024. Its deployed source is absent from accessible branches.                                                                                                                                                     |
| MAGAS7                                  | `OWNER-REVIEW`  | The 5,122px mobile overflow is fixed and proven at five widths in draft PR [Egzothicki/magas7#1](https://github.com/Egzothicki/magas7/pull/1). The current Mac account cannot push to the owner repository, so the fix is not live.                                                                                                                                   |
| Merlin AI                               | `LIVE-DEGRADED` | The public assistant is reachable. A durable fix for expiring generated avatars is pushed at `35c42a25`, but its release correctly fails readiness because three required WhatsApp webhook secrets are not configured. The previous ready release was restored.                                                                                                       |

Source recovery for Pledging, Lobbies, and Ecosystem Games is now a P0 owner
task. Do not patch `app.magiccraft.frontend-new` as a proxy: its routes and
bundles do not match those deployed applications.

## State legend and safety boundary

| State           | Meaning                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `LIVE-HTTP`     | The production URL returned HTTP 200 during this audit. Browser behavior may still need proof.                                                |
| `LIVE-RENDERED` | The production page rendered in a browser and its core anonymous interaction or content contract was checked.                                 |
| `LIVE-PARTIAL`  | The endpoint returned successfully but explicitly reported missing or unavailable upstream data.                                              |
| `LOCAL-PENDING` | A change exists in the local working tree, but still needs integrated tests, build, rendered review, commit, deploy, and production proof.    |
| `LOCAL-REPAIR`  | A tested repair exists locally and its root cause is verified, but production acceptance still depends on the deployed response.              |
| `KNOWN-BROKEN`  | The current source or live response shows a concrete user-facing failure or misleading behavior.                                              |
| `OWNER-REVIEW`  | A tested fix is published for owner review, but the current identity cannot merge or deploy it.                                               |
| `OWNER-VERIFY`  | The page works technically, but a product, program, legal, or content owner must confirm that the offer is still current.                     |
| `GATED`         | Proof would mutate real data, trigger a wallet or exchange action, send a message/application, require credentials, or change infrastructure. |

Ownership tags used in the queue:

- `[critical]`: truth, broken core behavior, or a misleading live surface.
- `[parallel]`: independent, safe work suitable for an economical agent lane.
- `[gated]`: requires infrastructure access, an authenticated account, a real external send, a wallet/payment action, or owner approval.
- `[defer]`: useful after the critical path, but not required to make the current product trustworthy.

## Architecture map

```text
magiccraft.io on Netlify
├── Vite + React + TypeScript single-page app
│   ├── BrowserRouter and lazy route pages in src/App.tsx
│   ├── shared Header/mobile drawer and Footer
│   ├── local static game, hero, legal, program, and support content
│   └── Sanity-backed individual blog posts and hosted admin handoff
├── Netlify routing
│   ├── SPA fallback and MCRT purchase aliases
│   ├── a separate static /contact-us page
│   └── API rewrites to Netlify Functions
├── Netlify Functions
│   ├── game server and battle-pass reads
│   ├── MCRT market data
│   ├── status aggregation
│   ├── live-support AI chat
│   ├── grants intake
│   └── MCRT social mentions
└── external destinations opened by the drawer
    ├── AI portfolio: Merlin, Akyn, MagicAds, MAGAS7, DragonList, DocAI
    ├── MagicCraft Web3: lobby, marketplace, pledging, referral, leaderboard, stats
    ├── game distribution: iOS, Android, Steam, Game Maker, ecosystem games
    └── MCRT access: PancakeSwap, MetaMask, Bybit
```

Important seams:

1. The site does not own the availability or authenticated behavior of the external AI, Web3, app-store, wallet, exchange, or game services.
2. `public/contact-us/index.html` and `src/pages/ContactUs.tsx` currently implement the same legal/support flow twice. Netlify serves the static version in production, so the two copies can drift.
3. Production HTML reachability is broad because Netlify returns the SPA shell for registered and unknown routes. Route-level browser proof is required after JavaScript loads.
4. The AI products are a portfolio of separate products. A shared account, billing system, or universal MCRT checkout must not be implied unless it is actually implemented and verified.

## Pass 1: raw issue and opportunity inventory

This pass intentionally records all meaningful findings before pruning.

### Navigation, product truth, and mobile drawer

- The screenshot-listed `Rent (Testnet)` destination returns HTTP 403 with Cloudflare Error 1000, “DNS points to prohibited IP.” It is not a working product destination.
- The old Game Maker destination pointed to the internal creator-program page instead of the real Steam Game Maker listing.
- Drawer labels did not explain what each destination did, whether it was live, beta, early access, external, or a program.
- AI product copy was duplicated across components, allowing the homepage, drawer, and whitepaper to contradict one another.
- The old mobile drawer allowed ambiguous accordion state and had fragile scrolling around the fixed MagicAds banner and iOS safe area.
- Internal destinations should use router links; external destinations should visibly open a new tab; action buttons such as device-specific game launch and MetaMask should remain buttons.
- Keyboard focus, Escape close, body-scroll lock, active-page state, and route-change close behavior need integrated browser proof.
- The language selector needs one mobile and one desktop check after each route change; translating the DOM must not leave stale or overlapping controls.

### Route-level function and truth problems

- `/server` is labelled as live status but renders hard-coded `Down`, `Issues`, and `Operational` states plus sample logs. This is misleading and must not remain presented as live data.
- `/leaderboard` never completes loading because its data request is commented out and the component initializes `loading` to `true`. Its page heading also says “MagicCraft Verify.”
- `/topholders` renders repeated hard-coded wallet rows and an inert “Load next 10 holders” control while presenting itself as the top-holder list.
- `/verify` has a local allowlist that still includes broken `rent.magiccraft.io`; its explanatory copy mentions phone and WeChat even though those platforms cannot be selected or checked.
- `/hero` is registered as a base route but intentionally renders “Hero not found.” It should redirect to the roster or be documented as an invalid-slug recovery route.
- `/blog/:slug` and `/admin/*` depend on Sanity, while the production status function currently reports the Sanity check as HTTP 404. The exact CMS failure surface needs browser and configuration proof.
- `/patch`, `/news`, `/bounties`, `/careers`, and `/guilds` are technically routable but include time-sensitive content that requires an owner-currentness review.
- `/grants/success` is directly routable. It must never imply confirmed delivery merely because the URL was opened.
- `/contact-us` has a static production implementation and a React implementation. Both currently open an email draft rather than send a request automatically, and both must state that clearly.
- `/buy-mcrt`, `/buy`, and `/get-mcrt` correctly redirect to `/pricing` at the Netlify layer, but the page hands users to third-party services and must not imply that MagicCraft controls execution price, custody, availability, or regional eligibility.
- The wildcard route relies on the client app to render the 404 because the server intentionally returns the SPA shell with HTTP 200.

### Live runtime and function findings

- `GET /gameserverapi/battlepass/active` returned HTTP 502.
- `GET /api/game-stats` returned HTTP 200 with `meta.status: partial`: market data was live, while the legacy game-server source timed out and all game totals were unavailable. The separate public lobby Stats API was then found to have usable totals.
- `GET /.netlify/functions/status` returned HTTP 200, but reported `coreOk: false`, the game server timed out, Rent returned 403, Bybit timed out, and the Sanity check returned 404. Its API summary was 6/8.
- `GET /.netlify/functions/mcrt-mentions` produced no bytes before the 25-second audit timeout. No current UI consumer was found in `src/`.
- `GET /api/mcrt-price` returned HTTP 200.
- `GET` requests to the POST-only live-support and grant-submission functions returned the expected HTTP 405. Their real POST behavior was not invoked.
- The grant function redirects to the success page even when its upstream submission request is not successful. That creates a false-positive delivery risk and needs a durable delivery contract.
- Production route shells returned HTTP 200 for every registered route checked; the three buy aliases ended at `/pricing`. This is reachability only, not rendered-page proof.

### Product-function proof gaps

- All six AI product roots returned HTTP 200, but account creation, sign-in, billing, upload, generation, publishing, and account persistence were not exercised.
- Lobby, marketplace, pledging, referral, ecosystem games, Game Maker, lobby leaderboard, and lobby stats returned HTTP 200. The Leaderboard rendered ranked rows after its delayed load. The older lobby Stats UI crashed when three chart series were empty even though its public API returned valid totals. Wallet connection, signing, trading, pledging, match creation, reward claims, and referrals were not exercised.
- PancakeSwap and MetaMask returned HTTP 200. Bybit could not be resolved from the local audit environment and also timed out in the production status check; this is inconclusive rather than proof that Bybit is globally down.
- Apple App Store, Google Play, and both Steam listings returned HTTP 200. Installation, launch, login, matchmaking, purchases, PvP, PvE, and Game Maker export were not exercised.
- Mailto applications and support/deletion requests were not sent. A generated draft is not delivery proof.

### Released repair snapshot

The following items shipped in commit `8a29c085` and were rechecked on the
published Netlify deployment:

- A typed shared AI product catalog now supplies product names, purposes, public URLs, and status labels.
- The drawer now contains purpose text and status badges, uses router links for internal pages, marks external destinations, and keeps only one mobile accordion open.
- The mobile drawer has revised fixed-height, safe-area, focus, Escape, body-scroll, and route-change behavior.
- The broken Rent link has been removed from the live drawer data.
- Game Maker now points to the real Steam listing and explains that game integration is still planned.
- Shared-shell and back-navigation changes are published for Careers, Bounties, Privacy, and Terms.
- Focused navigation and page-shell tests pass as part of the 80-test integrated gate.
- The whitepaper has been rewritten as a dated living guide with a source ledger, status model, product boundaries, MCRT utility limits, tokenomics, and risk notices.
- Misleading internal Server, Leaderboard, Top Holders, Verify, and direct Grants Success states have been replaced with source-backed, external-handoff, or explicitly unavailable behavior.
- `/stats` now uses a bounded owned proxy for validated lobby totals and market data, omits the empty chart maps that crash the older lobby page, and keeps season data explicitly unavailable when the legacy game server times out.
- Backend contracts now fail closed for Grants, bound Battlepass and MCRT Mentions timeouts, validate lobby payload size/schema, and distinguish current products in Status.

## Pass 2: pruned 80/20 workstreams

The raw list reduces to these high-leverage workstreams. Cosmetic redesign, speculative platform unification, and duplicate audits are removed from the critical path.

1. **Truth source:** one typed product/status catalog plus a fact-checked whitepaper and purpose copy.
2. **Navigation contract:** every drawer item has a truthful purpose, status, correct destination, and accessible internal/external/action semantics.
3. **Misleading page removal or repair:** `/server`, `/leaderboard`, `/topholders`, and `/verify` must be source-backed, clearly unavailable, redirected, or removed from discoverable UI.
4. **Game data recovery:** keep public lobby totals usable now, while separately restoring the upstream game-server connection needed for season and battle-pass data.
5. **Program delivery integrity:** Grants, Bounties, Careers, Guilds, Support, and account deletion must accurately state what is sent, where it goes, and whether delivery succeeded.
6. **CMS integrity:** prove Sanity configuration, one valid blog slug, invalid-slug behavior, and authenticated admin handoff without exposing credentials.
7. **External product checks:** verify landing purpose and safe read-only controls for every AI, Web3, game, and MCRT destination; keep transactional proof gated.
8. **Route matrix:** render every route on mobile and desktop, test one meaningful safe interaction per page, and verify error/loading/empty states.
9. **Runtime observability:** make health checks fast, remove or quarantine unused slow functions, and separate core failure from optional third-party anti-bot responses.
10. **Release proof:** full tests, lint, build, mobile drawer screenshots, desktop review, deploy-commit match, and production recheck.

## Pass 3: owned execution queue

### `[critical]` truth and broken-function queue

- [x] `LIVE` Finish the fact-checked whitepaper rewrite; remove investment-like, fixed-return, universal-MCRT, shared-account, and unsupported product claims.
- [x] `LIVE` Verify the shared AI catalog, drawer purpose/status labels, one-open accordion, scroll lock, focus trap, Escape behavior, active-route state, and external-link indicators.
- [x] `LIVE` Confirm Rent is absent after deployment and Game Maker opens the exact Steam listing.
- [x] `LIVE` Replace `/server` fabricated statuses and logs with an honest service directory and source-backed Stats path.
- [x] `LIVE` Hand `/leaderboard` to the working lobby rankings and remove the permanent loader and wrong “Verify” heading.
- [x] `LIVE` Remove placeholder holder rows and inert pagination; hand current balances to the attributable BNB Chain explorer.
- [x] `LIVE` Correct `/verify`: remove Rent while broken and delete unsupported phone/WeChat claims.
- [x] `LIVE-PARTIAL` Restore useful lobby totals through the owned `/stats` path without loading the broken empty charts.
- [ ] `BLOCKED-UPSTREAM` Restore season/battle-pass data. The GameServer answers on `8903`, but Netlify cannot reach the custom port. Expose the owned route over HTTPS 443 or approve the required egress path, then rotate the historical credential and store only the replacement in Netlify environment storage.
- [x] `LIVE, SEND-GATED` Make grant submission fail closed: redirect only after the intake service accepts it, validate server-side, and keep direct success-page visits neutral. A real submission remains gated.
- [ ] Prove Sanity project/dataset configuration with one read-only query and one valid blog page; make the status check report the real CMS state.
- [x] `LIVE` Make `/grants/success` neutral when visited directly and show acceptance only after the accepted intake redirect.
- [x] Run the full integration gate, deploy the exact tested commit, and re-run the core production route, function, link, mobile drawer, Stats, and Leaderboard checks.

### `[parallel]` economical agent lanes

- [ ] Give every public route the shared Header/Footer shell, one clear H1, a reliable back path, a truthful empty/error state, and mobile-safe spacing.
- [ ] Add a route-contract test that renders every non-admin page and asserts its intended primary function, not merely that it mounts.
- [ ] Add external-link contract tests from the shared catalog so a product URL cannot silently drift in one component.
- [x] Add read-only function contract tests for live/partial game stats, lobby fallback, grants failure, status classification, timeouts, and upstream schema changes.
- [ ] Review `/patch`, `/news`, Bounties, Careers, Grants, and Guilds against current owner-approved content; add “last reviewed” dates where staleness matters.
- [ ] Consolidate the static and React `/contact-us` implementations into one maintained source, preserving the app-store-compatible public deletion URL.
- [x] Verify FAQ search, no-result state, email-draft generation, and explicit “nothing is sent until you send it” copy.
- [ ] Verify one valid hero, one invalid hero, roster navigation, previous/next hero controls, image fallbacks, and canonical casing.
- [ ] Verify the device-specific game action selects iOS, Android, and Steam correctly with mocked user agents.
- [ ] Verify language switching on Home, Whitepaper, a legal page, and one dynamic route without clipped or duplicated controls.
- [x] Put explicit per-request and total time budgets, response-size limits, and an honest empty fallback around MCRT mentions.
- [x] Rework the status aggregator so core failures, optional dependencies, missing configuration, and current product destinations have distinct meanings.
- [ ] Add automated checks for duplicate or misleading buttons such as inert pagination, fake refresh, or controls whose data request is disabled.
- [ ] Re-check SEO title, description, canonical, robots policy, structured data, and social image for every indexable route.

### `[gated]` infrastructure, authenticated, transactional, or external-send work

- [ ] Fix `rent.magiccraft.io` DNS/Cloudflare Error 1000 only with authorized DNS and hosting access; keep Rent hidden until a post-fix production check passes.
- [ ] Test a real grant submission only with an approved test recipient or isolated preview form, then prove the stored submission and notification path.
- [ ] Test Careers, Bounties, Support, Guilds, and account-deletion outbound email/Telegram workflows only with an approved test identity and recipient.
- [ ] Test MetaMask network switching, token watch, signing, and rejection handling in an isolated test wallet; do not approve a real swap.
- [ ] Test PancakeSwap and Bybit order flows only with explicit transaction authority; read-only landing and market-pair verification is the default.
- [ ] Test lobby registration, match creation, reward claims, referrals, pledging, marketplace trades, and wallet persistence only with approved test accounts/assets.
- [ ] Test AI-product sign-up, paid plans, uploads, publishing, stored meeting content, and health-related uploads only with approved test accounts and non-sensitive fixtures.
- [ ] Test the Sanity admin redirect only with authorized CMS access; do not change published content during a smoke test.
- [ ] Install and launch MagicCraft or Game Maker only on an approved device; store-listing reachability is not install or gameplay proof.
- [ ] Obtain legal/product-owner approval for Terms, Privacy, Disclaimer, token-risk wording, grant/bounty availability, and any roadmap or rewards claim.

### `[defer]` after trust and function are complete

- [ ] Broad visual redesign outside the drawer and whitepaper.
- [ ] Unified sign-in or billing across independent AI products.
- [ ] A CMS migration or router/framework rewrite.
- [ ] Advanced analytics dashboards beyond reliable source-backed status and error reporting.
- [ ] New token, marketplace, guild, or creator features not required to make current claims work.
- [ ] Additional animation or decorative effects that do not improve comprehension, accessibility, or conversion.

## Economical agent ownership plan

Use one controller and three non-overlapping lanes. Each lane returns a patch plus evidence; the controller owns integration, status truth, and deployment.

| Lane                               | Owned work                                                                                            | Required evidence                                                          |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Controller                         | scope, whitepaper/product truth, merge conflict control, final tests, deploy, production verification | clean reviewed diff, exact commit, test/build output, live commit proof    |
| Agent A: navigation and page shell | Header/drawer semantics, accessibility, shared page shells, internal links                            | focused tests plus 390x844 and desktop rendered proof                      |
| Agent B: route function            | program/support/news routes, meaningful interactions, empty/error states                              | route-contract tests and no real external sends                            |
| Agent C: runtime and destinations  | Netlify functions, safe GET checks, external reachability, status classification                      | bounded response evidence; no credentials, wallet actions, or transactions |

Do not assign the same source file to two agents. Stop an agent lane when its next proof requires a gate, and record the smallest owner action instead of guessing.

## Every `App.tsx` route: purpose and current status

Production returned an HTML response for every route below during this audit. That common shell result is omitted from each row so the table can focus on actual function.

| Route                  | Intended function                                                                                                              | Current evidence and next acceptance                                                                                                             | Owner bucket                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| `/`                    | Ecosystem homepage; explain the AI portfolio and MagicCraft game, then route users to the correct product or game destination. | `LIVE-RENDERED`: balanced hero, game, verified Stats, six AI products, system map, drawer, mobile bar, and honest fallback states are published. | `[critical]`                |
| `/magiccraft`          | Game overview, story/modes/media, platform downloads, and entry into play.                                                     | Registered and reachable; verify current PvP/PvE claims, every device CTA, video/media fallback, and mobile layout.                              | `[parallel]`                |
| `/hero`                | Base hero route or invalid-hero recovery.                                                                                      | `CODE-COMPLETE`: redirects to `/chooseyourhero`; dynamic hero routes remain intact.                                                              | `[parallel]`                |
| `/hero/:heroName`      | Detail for one hero, abilities, role, stats, and adjacent hero navigation.                                                     | Source-backed by local character data; test one valid slug, one invalid slug, image fallback, previous/next, and roster return.                  | `[parallel]`                |
| `/chooseyourhero`      | Browse the playable hero roster and open character details.                                                                    | Local roster renders; owner must confirm roster/current availability and browser test every generated slug.                                      | `[parallel]` `OWNER-VERIFY` |
| `/faq`                 | Search help content and prepare a support email draft.                                                                         | Search/mailto behavior exists; local interaction test is pending integration. No message was sent.                                               | `[parallel]`                |
| `/patch`               | Publish patch notes and route users to support.                                                                                | Static content is reachable; date/version/currentness and support action require owner review.                                                   | `[parallel]` `OWNER-VERIFY` |
| `/news`                | Show official news, patch updates, and announcements.                                                                          | Current page uses local news data; content truth and each article destination need review.                                                       | `[parallel]` `OWNER-VERIFY` |
| `/blog/:slug`          | Render one Sanity-backed article and a truthful missing/error state.                                                           | Sanity health check reports 404; verify a real slug, invalid slug, loading failure, and image/body rendering.                                    | `[critical]`                |
| `/build-on-magiccraft` | Explain the creator program and open the reviewed application path.                                                            | Google Form destination exists; local truth/CTA changes are pending. Form submission is `GATED`.                                                 | `[parallel]` `[gated]`      |
| `/server`              | Give users honest service destinations without fabricated uptime.                                                              | `CODE-COMPLETE`: hard-coded status/log data removed; direct services and source-backed Stats are exposed with clear monitoring limits.           | `[critical]`                |
| `/terms`               | Current terms governing site/game/services.                                                                                    | Local shared-shell work is pending; legal content and effective date require owner approval.                                                     | `[parallel]` `[gated]`      |
| `/privacypolicy`       | Explain current data collection, processing, retention, rights, and contact path.                                              | Local shared-shell work is pending; legal/current-practice review is `GATED`.                                                                    | `[parallel]` `[gated]`      |
| `/disclaimer`          | State product, game, token, external-service, and risk limitations.                                                            | Registered; reconcile with whitepaper and current product behavior, then obtain owner/legal approval.                                            | `[critical]` `[gated]`      |
| `/verify`              | Check a submitted domain/email/social identity against an official allowlist.                                                  | `CODE-COMPLETE`: broken Rent and unsupported phone/WeChat claims removed; supported checks remain interactive.                                   | `[critical]`                |
| `/leaderboard`         | Show current ranked player results.                                                                                            | `CODE-COMPLETE`: honest handoff to the working delayed-load lobby leaderboard; owned Stats is one click away.                                    | `[critical]`                |
| `/topholders`          | Show current largest MCRT holders from an attributable on-chain source.                                                        | `CODE-COMPLETE`: placeholder rows/pagination removed; verified MCRT contract hands off to BscScan balances.                                      | `[critical]`                |
| `/stats`               | Show validated lobby totals and current MCRT market data without depending on empty chart series.                              | `LIVE-PARTIAL`: public lobby totals and MCRT market data render; season fields stay unavailable while Netlify-to-GameServer access is blocked.   | `[critical]`                |
| `/dashboard`           | Preserve the old source-backed statistics URL.                                                                                 | `CODE-COMPLETE`: redirects to canonical `/stats`.                                                                                                | `[parallel]`                |
| `/bounties`            | List current scoped tasks, reference value, requirements, and email application path.                                          | Local shell/function changes pending; MCRT price endpoint works. Program inventory/reward terms need owner confirmation; sending is `GATED`.     | `[parallel]` `[gated]`      |
| `/grants`              | Collect a working-project funding application for review.                                                                      | `CODE-COMPLETE`: validation and fail-closed intake contract tested; a real submission/archive proof remains `GATED`.                             | `[critical]` `[gated]`      |
| `/grants/success`      | Explain the result of an accepted intake flow without making a direct URL visit look successful.                               | `CODE-COMPLETE`: direct visits are neutral; accepted intake redirects use the explicit result state.                                             | `[critical]`                |
| `/careers`             | Describe current role types and open an email application with work samples.                                                   | Local shell work is pending; role availability/currentness needs owner confirmation. Sending is `GATED`.                                         | `[parallel]` `[gated]`      |
| `/guilds`              | Route communities to real participation, competition, docs, lobby, and submission channels.                                    | Destinations exist; labels, “guild” versus player leaderboard, and submission channel need truth review.                                         | `[parallel]` `OWNER-VERIFY` |
| `/whitepaper`          | Living, sourced guide to the game, AI products, Web3 surfaces, MCRT utility, status, and risk.                                 | `CODE-COMPLETE`: v3.2 is dated 13 July 2026 with official sources, function status, product boundaries, tokenomics, and risk regression tests.   | `[critical]`                |
| `/pricing`             | Explain MCRT access routes and hand off to lobby, DEX, wallet, or exchange.                                                    | PancakeSwap/MetaMask reachable; Bybit check inconclusive. No wallet or trade action was performed.                                               | `[critical]` `[gated]`      |
| `/contact-us`          | Contact support and prepare an account-deletion email request.                                                                 | Production serves `public/contact-us/index.html`, not necessarily the React route. Both copies open a draft and can drift. Consolidate.          | `[parallel]`                |
| `/buy-mcrt`            | Legacy purchase alias.                                                                                                         | Netlify redirects to `/pricing` successfully. Preserve canonical/analytics behavior.                                                             | `[parallel]`                |
| `/buy`                 | Legacy purchase alias.                                                                                                         | Netlify redirects to `/pricing` successfully. Preserve canonical/analytics behavior.                                                             | `[parallel]`                |
| `/get-mcrt`            | Legacy purchase alias.                                                                                                         | Netlify redirects to `/pricing` successfully. Preserve canonical/analytics behavior.                                                             | `[parallel]`                |
| `/admin/*`             | Redirect an authorized editor to hosted Sanity Studio.                                                                         | Public shell is reachable; CMS status reports 404. Authenticated redirect/content access is `GATED`.                                             | `[critical]` `[gated]`      |
| `*`                    | Render a useful client-side 404 and routes back to valid destinations.                                                         | Server returns the SPA shell by design; verify the client H1, status messaging, Home link, and no accidental indexing.                           | `[parallel]`                |

## Every drawer and external product destination

### Primary and AI destinations

| Drawer item                                             | Intended function                                                                                                                 | Audit status                                                      | Next acceptance                                                                                        |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Explore AI Suite / AI Suite Overview -> `/#ai-products` | Scroll to the single comparison of verified AI products.                                                                          | `LIVE-RENDERED`; present in the drawer, hero, and mobile bar.     | Keep cross-route hash and focus behavior in the release regression suite.                              |
| Merlin AI -> `https://merlintheai.com/`                 | Multi-persona assistant for chat, voice, images, translation, markets, memory, and connected messaging workflows.                 | `LIVE-HTTP` 200; also shown as the featured “Open Merlin” action. | Verify the landing purpose and one safe anonymous interaction; sign-in/connected messaging is `GATED`. |
| Akyn -> `https://akyn.pro/`                             | AI film workflow from scripts and reusable characters through scenes, editing, and finished video.                                | `LIVE-HTTP` 200; also shown as “Akyn Studio.”                     | Verify the landing purpose; generation, uploads, credits, and publishing are `GATED`.                  |
| MagicAds -> `https://magicads.dev/`                     | Agent-native advertising network for campaigns and publisher inventory.                                                           | `LIVE-HTTP` 200.                                                  | Verify advertiser/publisher paths read-only; campaign creation, payment, and publishing are `GATED`.   |
| MAGAS7 -> `https://magas7.com/`                         | Early-access agentic marketing workspace covering research, content, design, scheduling, publishing, analytics, and brand review. | `LIVE-HTTP` 200; shared catalog says `Early access`.              | Preserve the early-access label; account and publishing proof are `GATED`.                             |
| DragonList -> `https://dragonlist.ai/`                  | Meeting transcription, action-item assignment, and searchable follow-up record.                                                   | `LIVE-HTTP` 200.                                                  | Verify landing purpose; meeting upload/recording and stored data are `GATED`.                          |
| DocAI -> `https://docai.live/`                          | Educational wellness guidance that organizes symptoms, reports, patterns, and next-step questions.                                | `LIVE-HTTP` 200.                                                  | Keep the non-diagnosis/non-emergency warning; uploads and personal health data are `GATED`.            |

### Web3 destinations

| Drawer item                                                     | Intended function                                                   | Audit status                                                                                                               | Next acceptance                                                                                                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Web3 Lobbies -> `https://lobby.magiccraft.io/`                  | Create or join supported matches and manage Web3 game rewards.      | `LIVE-DEGRADED`: browsing works, but the prize-pool API is gone and the old wallet bundle throws during anonymous preload. | Recover the owning source, replace fallback balances with honest unavailable data, and upgrade or guard the wallet integration. |
| Marketplace -> `https://app.magiccraft.io/marketplace/explorer` | Browse and trade supported game assets.                             | `LIVE-PUBLIC`: anonymous catalog browsing is reachable.                                                                    | Wallet connection, listing, and trade remain `GATED`.                                                                           |
| Pledging -> `https://app.magiccraft.io/pledging`                | Lock MCRT for a selected term under the current pool rules.         | `LIVE-DEGRADED`: the page is reachable, but live TVL and percentage rendering fail through its single-RPC path.            | Recover the matching deployed source and add resilient read-only RPC fallback before any transaction test.                      |
| Referral System -> `https://lobby.magiccraft.io/referral`       | Create or use a referral path for eligible lobby rewards.           | `GATED`: the destination is reachable but its purpose requires an eligible signed-in account.                              | Sign-in, code creation, and reward proof require controlled owner approval.                                                     |
| Rent (Testnet) -> `https://rent.magiccraft.io/`                 | Former testnet rental destination shown in the supplied screenshot. | `KNOWN-BROKEN`: HTTP 403, Cloudflare Error 1000. It is absent from live navigation.                                        | Repair DNS/hosting, then complete product-owner and testnet review before re-listing.                                           |

### About and program destinations

| Drawer item                                   | Intended function                                          | Audit status                                                                                             | Next acceptance                                                         |
| --------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Careers -> `/careers`                         | Current role types and email application.                  | `LOCAL-PENDING` shared shell.                                                                            | Owner-current role review; email send `GATED`.                          |
| Guilds -> `/guilds`                           | Community and participation resources.                     | Registered; wording review pending.                                                                      | Correct player/guild labels and prove each external resource.           |
| Whitepaper -> `/whitepaper`                   | Verified living guide and source ledger.                   | `LIVE-RENDERED`: v3.2 is published with status labels, source ledger, product boundaries, and risk copy. | Keep source dates and system states current.                            |
| Game Overview -> `/magiccraft`                | Current game, modes, story, and platforms.                 | `LIVE-RENDERED`: current PvP/PvE overview and platform entry route are published.                        | Continue physical install and authenticated gameplay checks separately. |
| FAQs -> `/faq`                                | Search common questions and prepare support contact.       | Local interaction work pending.                                                                          | Search/no-results/draft-copy test.                                      |
| News -> `/news`                               | Current product, game, patch, and ecosystem announcements. | Registered.                                                                                              | Content-owner review and link check.                                    |
| Build on MagicCraft -> `/build-on-magiccraft` | Creator-program information and reviewed application link. | Registered; local truth/CTA changes pending.                                                             | Google Form landing read-only; submission `GATED`.                      |
| Grants -> `/grants`                           | Funding application for an existing build.                 | Submission integrity unresolved.                                                                         | Preview/dry-run validation before an approved test submission.          |
| Bounties -> `/bounties`                       | Scoped community tasks with email application.             | Local shell work pending.                                                                                | Owner verifies open tasks/rewards; sending `GATED`.                     |

### MCRT and game destinations

| Drawer item                                              | Intended function                                                                 | Audit status                                                                                                           | Next acceptance                                                                                |
| -------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| PancakeSwap DEX                                          | Open the MCRT/BNB swap route on BNB Chain.                                        | `LIVE-HTTP` 200.                                                                                                       | Verify chain, token contract, and URL parameters read-only; swap is `GATED`.                   |
| MetaMask                                                 | Open MetaMask swap and, with consent, switch/add BNB Chain and watch MCRT.        | `LIVE-HTTP` 200.                                                                                                       | Mock provider success/rejection tests; real wallet action is `GATED`.                          |
| Bybit Spot                                               | Open the external MCRT/USDT market.                                               | Inconclusive: local DNS failure and production status timeout.                                                         | Re-check from an alternate region/browser; account/order action is `GATED`.                    |
| MagicCraft device action                                 | Send iOS to App Store, Android to Google Play, and other devices to Steam.        | All three store listings returned `LIVE-HTTP` 200.                                                                     | Mock each user agent; installation, login, and gameplay are `GATED`.                           |
| Ecosystem Games -> `https://games.magiccraft.io/`        | Open the browser-based ecosystem game hub.                                        | `LIVE-HTTP` 200; labelled `Beta`.                                                                                      | Verify beta label and anonymous landing; authenticated play is `GATED`.                        |
| Game Maker -> Steam app `3478810`                        | Download the free MCRT Game Maker map editor. Export/integration remains planned. | `LIVE-HTTP` 200; corrected exact Steam destination is published.                                                       | Store truth/read-only check; install/export is `GATED`.                                        |
| Heroes -> `/chooseyourhero`                              | Browse playable heroes and details.                                               | Registered.                                                                                                            | Roster/currentness and generated-route test.                                                   |
| Leaderboard -> `https://lobby.magiccraft.io/leaderboard` | Show current lobby rankings.                                                      | `LIVE-RENDERED`: delayed load produced 50 all-time rows.                                                               | Keep the live handoff and recheck its empty/loading states without inventing local rankings.   |
| Game stats -> `/stats`                                   | Show validated lobby totals and current market data.                              | `LIVE-PARTIAL`: verified totals render; season values remain unavailable while the GameServer network path is blocked. | Keep the older external chart regression documented until its source app filters empty series. |

### Drawer utility controls

| Control                            | Intended function                                                                          | Acceptance                                                                               |
| ---------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Close button and backdrop          | Close the dialog and restore focus to the hamburger.                                       | Mouse, touch, Escape, focus restoration, and backdrop click.                             |
| One-open accordion groups          | Make long navigation scannable without stacking every group.                               | Only one group expanded; correct `aria-expanded`/`aria-controls`; no clipped last item.  |
| Language selector                  | Apply the selected language and retain it across routes.                                   | Mobile/desktop selection, saved preference, route-change refresh, and readable fallback. |
| Privacy / Terms / FAQ footer links | Reach legal/help pages without leaving a stale open drawer.                                | Router navigation, drawer close, focus reset, and correct active state.                  |
| MagicAds top banner boundary       | Keep the ad live while the drawer begins below it and uses the remaining dynamic viewport. | iPhone viewport, browser chrome resize, orientation change, and safe-area bottom.        |

## Netlify function inventory

| Function or route                                      | Intended function                                                                      | Current live evidence                                                                                                         | Queue                                                                                         |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `battlepass.ts` via `/gameserverapi/battlepass/active` | Authenticated server-side proxy for current battle-pass data.                          | `KNOWN-BROKEN`: HTTP 502. The `8903` repair is live, but Netlify still reports `upstream_timeout`.                            | `[critical]` expose the owned route over HTTPS 443 or allow the required Netlify egress path. |
| `game-stats.ts` via `/api/game-stats`                  | Combine lobby, game-server, and market data without inventing missing values.          | `LIVE-PARTIAL`: bounded lobby totals and market data render with source metadata; GameServer season data remains unavailable. | Keep partial semantics; recover the season upstream separately.                               |
| `mcrt-price.ts` via `/api/mcrt-price`                  | Return current MCRT USD data with fallbacks.                                           | HTTP 200 during audit.                                                                                                        | `[parallel]` schema/cache/staleness tests.                                                    |
| `status.ts` via `/.netlify/functions/status`           | Aggregate core and dependency health for the UI.                                       | HTTP 200; `coreOk: false`, 6/8 APIs, game server timeout, Rent 403, Bybit timeout, Sanity 404.                                | `[critical]` classify core/optional/blocked states correctly.                                 |
| `live-support-chat.ts`                                 | Generate support answers with rate and input controls.                                 | GET correctly returned 405; no POST was sent.                                                                                 | `[parallel]` fixture contract tests; real external AI call `GATED`.                           |
| `submit-grants.ts`                                     | Validate and durably store/deliver a grant application, then redirect only on success. | GET correctly returned 405; source can redirect after upstream failure.                                                       | `[critical]` atomic success/failure and isolated preview test.                                |
| `mcrt-mentions.ts`                                     | Aggregate public MCRT mentions.                                                        | Timed out after 25 seconds; no current UI consumer found.                                                                     | `[parallel]` timeout/cache or remove; do not keep a slow orphan function.                     |

## Definition of done

The sweep is complete only when all of the following are true:

- [ ] Every public route renders on 390x844 mobile and a desktop viewport without clipping, a blank chunk, a permanent loader, or a misleading empty state.
- [ ] Every route has one verified purpose, H1, primary action, back/recovery path, canonical policy, and source-aware error state.
- [ ] Every drawer destination lands on the intended product/page, carries an accurate status, and has the correct internal/external/action element semantics.
- [ ] No placeholder wallet, ranking, log, uptime, or game statistic is presented as live.
- [ ] Whitepaper, homepage, drawer, pricing, and legal pages agree on product purpose, product status, MCRT utility, roadmap status, and risk.
- [ ] Safe read-only API and link checks pass; transactional, wallet, authenticated, and send flows remain explicitly gated until approved.
- [ ] `npm test`, `npm run lint`, and `npm run build` pass from the exact commit to be released.
- [ ] Mobile drawer, Home, Whitepaper, one legal page, one dynamic hero, one data page, and each critical error state are visually reviewed after the build.
- [ ] The tested commit is pushed and the Netlify production deployment is proven to use that commit.
- [ ] Production is rechecked after deploy: route rendering, drawer interactions, all external destinations, safe GET endpoints, and absence of Rent from navigation.
- [ ] The closeout separates `fixed and live`, `fixed locally`, `reachable only`, `gated`, and `still broken`; HTTP 200 alone is never called a working product.

# MagicCraft design and concept plan

Research cutoff: 11 July 2026, Bangkok time.

## North star

**Battle through the Ashvales. Play free. Enter Web3 when you choose.**

MagicCraft should first feel like a living cross-platform fantasy game. The
optional `$MCRT` economy should then explain how eligible lobbies, assets,
marketplace activity, pledging, payments, and creator tools connect. Wider AI,
ads, and infrastructure products belong in a clearly labeled ecosystem layer,
not in front of the game.

Homepage hierarchy:

1. Playable fantasy game
2. Real gameplay and platform proof
3. Optional Web3 and `$MCRT` utility
4. Verified creator and ecosystem products
5. Community, news, and long-term vision

## P0 release: trust, clarity, and first-session conversion

- [x] Research current official game, store, lobby, token, contract, and product sources.
- [x] Replace the token-first hero with a game-first Ashvales proposition.
- [x] Make **Play free** the primary CTA and **Live lobbies** the secondary CTA.
- [x] Explain that the base game does not require a wallet.
- [x] Put real first-party gameplay in the first part of the homepage.
- [x] Remove the old third-party “100X” and “crypto millionaires” video carousel.
- [x] Replace multi-megabyte gameplay PNG delivery with optimized WebP assets.
- [x] Compress the homepage from the previous 18,042px desktop / 28,890px mobile structure.
- [x] Remove the large AI-product directory from the core homepage journey.
- [x] Replace it with a compact, status-labeled ecosystem preview.
- [x] Rewrite `$MCRT` utility copy to avoid investment, income, liquidity, or guaranteed-return language.
- [x] Qualify lobby, NFT, pledging, and secondary-asset requirements.
- [x] Replace square token-only social media art with real MagicCraft game art.
- [x] Make root metadata game-first and remove the unsupported site SearchAction.
- [x] Restore browser zoom by removing `maximum-scale=1`.
- [x] Update the sitemap to reflect real public routes.
- [x] Remove invented fallback live statistics and distinguish live, offline, stale, and unavailable states.
- [x] Stop status checks from showing false green when upstream data is unavailable.
- [x] Restore navigation at tablet and small-laptop widths from 768px through 1279px.
- [x] Hide the closed mobile dialog from assistive technology and repair toggle/close labels.
- [x] Reduce the mobile conversion bar to one clear journey without overlapping hero controls.
- [x] Add focused tests for truth states, navigation breakpoints, and keyboard behavior.
- [x] Verify 390, 768, 1024, 1280, and 1440-wide rendered layouts.
- [ ] Commit, push, wait for the Netlify deploy, and verify the public homepage and core CTAs.

## P1 next: conversion and information architecture

- [ ] Make `/buy-mcrt` the canonical buyer route instead of the misleading `/pricing` name.
- [ ] Give the buy route the normal header, footer, risk copy, contract proof, and return-to-game path.
- [ ] Present PancakeSwap, wallet import, and centralized exchange as one selector, not repeated cards.
- [ ] Remove duplicate price polling and use one visibility-aware refresh owner.
- [ ] Add a live lobby schedule preview using the official lobby API, with honest empty/error states.
- [ ] Show “100K+ completed lobbies” only from the verified lobby source and never call it active users.
- [ ] Add a hero-roster and Ashvales-lore section using current first-party art.
- [ ] Add a compact latest-patch/news block sourced from the owned CMS or store release notes.
- [ ] Create a dedicated `/ecosystem` or `/labs` route for AI, ads, payments, and infrastructure products.
- [ ] Give every ecosystem product a typed status: `live`, `beta`, `available`, or `planned`.
- [ ] Create a source ledger with URL, status, token role, and last-verified date for every public claim.
- [ ] Move the full team grid to a dedicated route and keep only current leadership proof on home.
- [ ] Move the full roadmap to a dedicated route and separate shipped work from plans.
- [ ] Audit the whitepaper for price-growth, passive-income, fixed-return, “10+ exchanges,” and other unsafe claims.
- [ ] Add clear token jurisdiction, volatility, smart-contract, lock-period, and eligibility notices.
- [ ] Clarify that BTC, ETH, SOL, and XRP lobby rewards described by the guide are BNB Chain-pegged assets.
- [ ] Add current Steam Early Access context without underselling the playable game.
- [ ] Add CTA analytics for Play, platform, lobby, marketplace, builder, and buy-provider handoffs.
- [ ] Add route tests for `/`, `/buy-mcrt`, `/whitepaper`, `/server`, and external CTA destinations.

## P1 next: design system, accessibility, and performance

- [x] Remove the global `.group { overflow: visible !important; }` override.
- [ ] Consolidate duplicate typography, glass, button, spacing, and keyframe rules in `index.css`.
- [ ] Replace every unsupported Tailwind opacity utility with a supported or arbitrary value.
- [ ] Define a small shared section primitive for eyebrow, title, body, and CTA alignment.
- [ ] Define one primary, secondary, quiet-link, and icon-button interaction pattern.
- [ ] Reduce repeated glass cards and use larger game art, editorial rhythm, and whitespace.
- [ ] Keep all click and touch targets at least 44px where the layout allows.
- [ ] Add visible focus, Escape behavior, focus return, and focus containment to mobile navigation.
- [ ] Audit unnamed links, empty alt text, headings, labels, and color contrast.
- [ ] Stop globally hiding horizontal overflow once the underlying layouts are proven safe.
- [ ] Keep mobile poster-first media and defer hero video on reduced-motion/save-data/small screens.
- [ ] Remove or convert the four raster-filled lobby SVG files totaling about 10.4 MB.
- [ ] Audit unused Zeus, WhatsApp, partner, icon, and legacy image assets before deletion.
- [ ] Add responsive image dimensions and modern formats for every first-viewport visual.
- [ ] Run Lighthouse/Web Vitals and set budgets for LCP, CLS, JS, image bytes, and total transfer.

## P2 product depth

- [ ] Design a current-season page with schedule, rules, qualification, pool state, and recent results.
- [ ] Improve hero detail pages with role, abilities, lore, current skins, and platform CTA.
- [ ] Build a first-match guide: download, account, mode, hero, and optional wallet steps.
- [ ] Add a marketplace education page for eligible assets, minting delays, fees, and utility.
- [ ] Add a creator funnel for Game Maker, assets, submission, review, status, and future integration.
- [ ] Replace machine-translated navigation with owned priority-language pages when data supports it.
- [ ] Add non-JavaScript metadata or prerendering for priority SPA routes.
- [ ] Move hardcoded homepage/product status content into a typed CMS-backed release process.
- [ ] Add a scheduled claim checker that flags broken links, stale dates, changed store builds, and unavailable APIs.
- [ ] Test the new concept with gamers, lobby users, collectors, and builders separately.

## Economical agent map

| Lane | Cost strategy | Ownership | State |
| --- | --- | --- | --- |
| Product and `$MCRT` research | Bounded read-only specialist | Official sources, safe claims, positioning | Complete |
| Live UX audit | Bounded read-only visual specialist | Desktop/mobile evidence and ranked issues | Complete |
| Architecture audit | Bounded read-only code specialist | Routes, data flow, risks, file plan | Complete |
| Homepage integration | Strong controller reasoning | Hero, section order, gameplay, concept | Complete |
| Trust/data implementation | Focused implementation specialist | Stats, status, dashboard, focused tests | Complete |
| Responsive navigation | Focused implementation specialist | Header, menus, mobile conversion bar | Complete |
| Static SEO/social | Focused implementation specialist | Metadata, sitemap, 1200x630 asset | Complete |
| Production release | Controller only | Review, tests, commit, push, deploy proof | In progress |

Agents do not share high-conflict ownership of the homepage, header, or global
CSS. Production, deploy, and safety decisions remain with the controller.

## Acceptance for this release

- A new visitor understands “free fantasy MOBA” before `$MCRT`.
- Real gameplay appears within the first two content sections.
- There is one dominant Play CTA and a clear optional Web3 path.
- No hype-video, fake-live, or invented fallback proof remains.
- Navigation works and is accessible from mobile through desktop.
- The homepage is materially shorter on desktop and mobile.
- Type, lint, tests, and production build pass.
- The pushed commit is the Netlify published commit.
- `https://magiccraft.io/` is visually verified at desktop and mobile sizes.

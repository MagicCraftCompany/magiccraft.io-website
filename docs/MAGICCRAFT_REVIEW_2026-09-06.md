# MagicCraft architecture and design review

Reviewed 6 September 2026. This is dated audit evidence, not a permanent claim that every external workflow works.

## System boundary

| Surface | Responsibility and observed state |
| --- | --- |
| `magiccraft.io` | React/Vite public website, product discovery, Netlify hosting, route shells and serverless integration. The public homepage and core routes respond. |
| MagicCraft game | Independent iOS, Android and PC clients. Official App Store, Google Play and Steam handoffs respond. Installs and gameplay were not exercised. |
| Lobby and Web3 apps | Independent accounts, matches, rankings, marketplace and pledging. Public pages, lobby schedule and aggregate statistics respond. Wallet actions and transactions were not exercised. |
| AI suite | Merlin, Akyn, MagicAds, MAGAS7, DragonList and DocAI remain independent products. Their catalog destinations respond with the expected product identity. This does not establish shared accounts, billing or deeper workflow health. |
| Game-server integration | The public stats API returns partial data: lobby and market sources respond, while game-server data times out. This does not establish a gameplay outage or the underlying network cause. |
| Infrastructure and content | MCRTPay, EnvRouter, Sanity, Cloudinary and market-data providers remain separate systems. Website integration code is not their runtime source. |

The architecture document maps the website boundary well. The available website and Web3 frontend sources do not establish the canonical game-server deployment, host ownership or recovery runbook. Verify those with the owning repository before changing live server configuration.

## Design changes

- Give official gameplay a wider frame and make the companion AI entry more compact. Preserve the approved “Play the game. Put AI to work.” concept and device-aware Play action.
- Group product names with their official marks, shorten duplicated introductory copy, and show product boundaries in full instead of clipping them. Preserve every catalog destination and product stage.
- Present supporting systems in clearer groups with flatter layouts. Preserve optional wallet boundaries, current service labels, direct links and the MagicAds slot.
- Keep gameplay thumbnails compact on mobile and defer video loading until the visitor chooses to play. Preserve the official poster, controls, media and reduced-motion support.

## Verification

The existing type check, lint, production build and all 133 tests passed under Node 20. The focused homepage tests continue to protect product destinations, stages, safety notes, live-game wording and section order.

The local production bundle was checked at 320, 390, 768, 1024 and 1440 pixels. Checks covered visible content bounds, every AI and system destination, primary keyboard focus, mobile drawer focus containment, Escape and focus return, the AI-suite anchor, and the mobile action bar. No page exceptions or horizontal content clipping were observed on the homepage. Core game, hero, lobby, stats, service, MCRT, whitepaper and news routes rendered.

Device-aware Play selected the existing Steam, App Store and Google Play URLs. Target selection was captured without installing, buying or changing an account. Separate anonymous checks established that those store landing pages responded.

At 390 pixels, the AI suite begins about 1,020 pixels earlier. The captured page is about 1,640 pixels shorter, with small height differences possible as live data resolves. Before/after captures use the same viewport; production-bundle captures proxy unchanged read-only stats calls to the live website.

## Remaining work

- Release access needs operational verification. The existing browser remains signed in to the repository. Local CLI credential recovery waited on macOS Keychain, and the GitHub app rejected a write despite reporting user-level write permission. Do not equate a filtered repository list, permission metadata or successful read with a working publication path. Preserve the tested tree and verify exact-commit CI, Netlify publication and public rendering after the release succeeds.
- Establish the game-server owner and verify endpoint, authentication, network, port and egress configuration before repairing the missing source. Preserve the existing honest partial-data response.
- Legacy, unrouted components contain a stale HyperPlay link and an unverified download figure. They are not current homepage defects; verify or remove them before any future reuse.

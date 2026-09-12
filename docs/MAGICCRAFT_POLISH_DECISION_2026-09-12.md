# MagicCraft homepage polish decision, 12 September 2026

## Evidence reviewed

- `ARCHITECTURE.md`, the cinematic landing decision, and the current design todo
- the active homepage composition and shared homepage interaction styles
- the typed AI product and ecosystem catalogs
- recent homepage, player-journey, canonical-route, and release commits
- the rendered production homepage at 1440 x 900 and 390 x 844

## 80/20 todo

| Priority | State             | Change                                                                                  | Reason                                                                                                           |
| -------- | ----------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| P0       | Critical complete | Turn the six AI product panels into a lighter editorial grid.                           | The repeated card chrome and footer labels make the middle of the homepage slower to scan, especially on mobile. |
| P0       | Critical complete | Keep two Web3 actions prominent and move the two education links into a supporting row. | Four stacked pill actions compete equally on mobile even though only two are main journey choices.               |
| P1       | Defer             | Consolidate legacy global typography, glass, button, and animation rules.               | This spans old routes and needs a separate regression pass.                                                      |
| P1       | Parallel          | Replace the raster-filled lobby SVG assets in a separate performance lane.              | It is valuable performance work, but unrelated to the homepage hierarchy being polished here.                    |
| P2       | Defer             | Add product detail routes and deeper activation analytics.                              | These are product-depth projects, not presentation fixes.                                                        |

## Preserved decisions

- Keep the cinematic hero and the “Play the game. Put AI to work.” identity.
- Keep the live game and six AI products as the two primary paths.
- Keep Web3 and MCRT optional, with the free-game and wallet disclosures visible.
- Keep each AI product’s verified destination, status, tailored safety note, and separate-account boundary.
- Keep MagicAds placement, accessibility behavior, and existing analytics events.

This release changes hierarchy and visual density only. It does not add payment,
wallet, identity, account, or data integrations.

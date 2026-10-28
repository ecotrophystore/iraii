# 12 — Reference Evidence Index and Coverage Matrix

## Coverage matrix

| Page / component | URL | Desktop | Mobile | Screenshot | Interaction tested | Spec done | Blockers | Status |
|---|---|---|---|---|---|---|---|---|
| Announcement bar | allbirds.com | Yes | No | Yes | No (carousel arrows not clicked) | Partial | — | Partial |
| Header / nav | allbirds.com | Yes | No | Yes | No (mega menu DOM read only) | Partial | — | Partial |
| Homepage hero | allbirds.com | Yes | No | Yes | No | Yes | — | Done (desktop) |
| Homepage category tiles | allbirds.com | Yes | No | Yes | No | Yes | — | Done (desktop) |
| Best Sellers carousel | allbirds.com | Yes | No | Yes | No (arrows not clicked) | Partial | — | Partial |
| Promo + editorial sections | allbirds.com | DOM only | No | No | No | Partial | Below-fold screenshot not captured | Partial |
| Footer | allbirds.com | DOM only | No | No | No | Partial | — | Partial |
| Men's collection | /collections/mens | Yes | No | Yes | Sort/filter not opened | Yes | Filter drawer not opened | Partial |
| Women's collection | /collections/womens | No | No | No | No | No | Not visited | Not started |
| Product page | /products/mens-tree-runner-nz-medium-grey | Yes | No | Yes | Size grid viewed; add-to-cart not triggered | Yes | Gallery, zoom, sticky bar not tested | Partial |
| Search results | /search?q=runner | Yes | No | Yes | No | Partial | Empty-state not captured | Partial |
| Cart drawer | (DOM) | DOM only | No | No | No | Partial | Not opened live | Partial |
| Our Story | /pages/our-story | Yes | No | Yes (scaled) | No | Partial | Loaded on retry; long-form body text not summarized for copyright reasons | Partial |
| Materials, Shoe Care, Help, Returns, Blog | various | No | No | No | No | No | Not visited | Not started |
| Responsive 1440/1024/768/390/320 | — | No | No | No | No | No | No resize performed | **Not started** |

## Evidence files (on disk, this session)
- Homepage top screenshot (viewport 1279×945).
- Homepage scrolled screenshot (lower tiles and Best Sellers).
- Men's collection screenshot (scaled 0.6).
- Men's Tree Runner NZ product screenshot (scaled 0.6).
- Search results screenshot (scaled 0.6).

## Counts (updated)
- Homepage sections observed: **8** (incl. announcement bar and footer).
- Page types visited: **9** — homepage, men's collection, women's collection (56 products), men's PDP, search, our-story, help, returns (embedded portal), shoe-care.
- Breakpoints captured: **1 verified** (desktop, 1279×945). The 1440, 1024, 390, and 320 captures are **invalid**: the page's CSS width stayed near 991 px. See doc 07.
- Interactions tested: **~10** desktop interactions (Men menu open/close, announcement arrow, carousel arrows, PDP accordion, PDP size selection, search query, cart button). Not tested: Quick Add, newsletter submit, checkout, real mobile menu.
- Specification documents written: **12 of 12**. Depth varies: 01, 02, 04, 05, 07 have observed data; 03, 06, 08–11 are partly placeholder where live testing was not done.

## Blockers
1. Interaction testing (doc 08) not performed — clicks and hovers were not run on the reference.
2. Responsive frames do not match requested widths exactly, so breakpoint thresholds are visual estimates.
3. Mega menu, mobile drawer, filter drawer, and cart drawer were read from the DOM, not opened live.
4. No repository attached, so nothing is committed to GitHub.
5. Checkout not inspected by design (no purchases).

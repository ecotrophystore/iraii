# 07 — Responsive Design Spec (Allbirds homepage, observed)

Method: browser window resized with the browser tool, then screenshot.

**CORRECTION (verified via DOM):** the page's CSS viewport did not follow the requested size. After requesting 390×844, `window.innerWidth` reported **991×761**. The "390" and "320" captures below were therefore rendered at about 991 px CSS width and are **not valid mobile results**. The 1024 and 1440 results may be similarly unreliable. Treat every breakpoint row below as unverified until a real mobile viewport is available. The mobile drawer also rendered as an empty panel at this width, so mobile menu contents remain untested.

| Requested width | Header | Hero | Category tiles | Notes |
|---|---|---|---|---|
| 1440×900 | Full nav: New Arrivals, Shop All, Men, Women + search + cart | Two-panel photo with vertical text strip; H1 and two CTAs bottom-right | Four tiles in a row | Full desktop layout |
| 1279×945 | Same as 1440 | Same | Four tiles in a row | Used for detailed inspection |
| 1024×768 | Logo centered, hamburger left, search and cart right | Single crop (shoe focus), overlay text bottom-left | Tiles begin below fold; two visible at bottom | Nav collapses to hamburger at this width |
| 390×844 | Logo centered, hamburger, search and cart | Single shoe crop; H1 smaller; CTAs stacked horizontally | Two tiles visible at bottom | Sticky floating "Shop Best Sellers" pill overlaps tiles |
| 320×640 | Logo centered, hamburger | Two-panel crop returns; H1 sized down; CTAs remain | Four tiles visible, narrow | Hero text fits without horizontal scroll (visual check only) |

## Observed rules (visual)
- Header collapses to hamburger between desktop and tablet widths.
- Hero switches between a two-panel photo (wide) and a single-shoe crop (narrow), so the hero image is art-directed per breakpoint.
- Category tiles change from 4-across to a two-per-row arrangement on narrow widths.
- The floating assistant pill sits over content on mobile. Blocks partial view of the first tiles.

## Not inspected
- Mobile menu drawer contents at 390 and 320: **not opened**.
- Product gallery and PDP layout at mobile widths: **not captured**.
- Collection filter drawer at mobile widths: **not opened**.
- Cart drawer at mobile widths: **not opened**.
- Sticky CTA behavior on mobile PDP: **not tested**.
- Typography scale per breakpoint: **Unavailable** (no CSS measurement pass at each width).

## Acceptance criteria for IRAI
- Breakpoints to set and verify with real CSS widths: 1440, 1024, 768, 390, 320.
- Hero: art-directed image swap at the same breakpoints.
- Header: collapses to hamburger at or below the tablet width.
- Category tiles: 4-up desktop, 2-up mobile, no horizontal page scroll at 320.
- Floating assistant or chat must not cover primary CTAs.

# 05 — Product Page Spec (Men's Tree Runner NZ, observed)

URL: https://www.allbirds.com/products/mens-tree-runner-nz-medium-grey

## Layout (Observed)
- **Two-column layout**: left = image gallery; right = sticky-style info panel with white card background.
- **Breadcrumb**: Home / Mens.
- **Gallery**: main image plus thumbnail rail on left (1 visible thumbnail; "Previous Image" / "Next Image" controls present in DOM).
- **Info panel** (top to bottom): title (serif display face, "Men's Tree Runner NZ"); "Also available in: Women's sizes" link; price "$100" with "+ FREE SHIPPING" tag; color selector; size grid; fit note; Fit Guide link; primary CTA; shipping note.

## Options
- **Color**: "Medium Grey (Classic Edition)" selected; color groups labeled Tree, Jersey, Stripe with swatches.
- **Size**: Men's sizes 8–15 in half sizes; Women's sizes toggle. Some sizes shown as unavailable (strikethrough styling).
- **Primary CTA**: "SELECT A SIZE" (disabled state until size chosen). Observed as disabled, grey.

## Fit and shipping
- "The Tree Runner NZ fits true-to-size for most customers." + Fit Guide link.
- "Free Shipping on Orders over $100" note (cart-tied).

## Below the fold (Observed in page text)
- "WHY WE LOVE THIS" accordion: story paragraph + "Best for" tags (Traveling, Walking, Commuting, Everyday).
- "View technical details": weight, stack height, drop, country of origin.
- "THOUGHTFULLY DESIGNED" feature list.
- "MATERIALS & SUSTAINABILITY" accordion: per-component materials (Upper, Midsole, Laces).
- "CARE INSTRUCTIONS" accordion.
- Lifestyle copy blocks: "Modern + Refined", "Travel Essentials".
- Four icon feature cards: Breathable, Lightweight, Supportive, Responsibly Sourced.
- "YOU MAY ALSO LIKE" product carousel (~10 cards, NEW badges).
- Reviews section present (count not captured).
- Responsible energy / renewable materials / regenerative agriculture band.

## Assistant / overlay
- Floating "What sizes are available for these sneakers?" and "Explore this product" prompt bubble bottom-left. Origin unclear; not classified.

## Measurements
- Image aspect ratios and card/column widths: **Unavailable** (JS image-rect pass returned 0 px because images were lazy-loaded; re-measure after scroll).

## Missing observations
- Zoom behavior: **Not tested**.
- Sticky purchase bar on scroll: **Not tested**.
- Add-to-cart result and cart drawer: **Not triggered** (intentionally, no purchase; selecting a size is allowed, but add-to-cart not performed).
- Reviews content and FAQ: **Not captured**.
- Mobile purchase flow: **Not inspected**.

## IRAI mapping
- Gallery → product images (wood grain, finish close-ups).
- Size grid → size/finish selector (wall art dimensions, wood finish, frame).
- "Why we love this" → "Why this piece" (devotional meaning, craft).
- Materials accordion → Wood, finish, carving, craftsmanship.
- Care accordion → Care and display instructions.
- Related carousel → "Pairs well with" (same deity or festival).

# 08 — Interaction and Motion Spec (Allbirds, partial)

Status: **Not tested.** No clicks, toggles, or hovers were performed in this pass. Only scroll, navigate, and resize were used. Everything below is a placeholder until tested.

## Tested results (this pass, desktop, no purchases)
- **Header Men menu:** hover dims the page without showing the panel. Click opens a full-width panel with a Men's tab, four columns (Featured: New Arrivals, Bestsellers, Leather Alternatives; Men's Shoes: Shop All, All-Weather, Sneakers, Slip Ons, Sandals, Active; Customer Favorites: Tree Runner NZ, Runner NZ, Cruiser; Apparel & Accessories: Socks). Contents fade in over about 2–3 s. **Escape closes it.**
- **Announcement bar:** the right arrow advances to the next message ("Due to increased demand…"). Works.
- **Best Sellers carousel:** the next arrow advances by one card per click. Card advance and disabled state at the end: partly observed, not confirmed at the final card.
- **Category tiles:** images crossfade or change between captures. Trigger (hover or timer) not confirmed.
- **PDP accordion ("Why we love this"):** click expands in place with a minus icon. Works.
- **PDP size selection:** selecting size 9 changes the primary CTA from disabled "Select a size" to enabled "Add to cart – $100". The button was **not pressed**.
- **PDP gallery:** at desktop width, the gallery shows a 2-column thumbnail grid beneath the main image, not a single thumbnail rail.
- **Search empty state:** not reached. A gibberish query returned **71 results** (fuzzy matching).
- **Cart drawer:** the View Cart button dims the page, but the "CART (0)" heading sits off-canvas (x=1289 in a 1279-px-wide view). The drawer may slide in from the right and was not fully captured. Needs a retest.
- **Mobile menu:** the hamburger opens a full-screen panel. Visible nav links in the DOM include Shoes, Men's Apparel, and Women's Apparel. Drill-down not verified.
- **Not tested, by design:** Quick Add (may add to cart), newsletter submit, checkout.

## Interactions still to test (in priority order)
1. Announcement bar arrows: trigger, slide change, auto-advance.
2. Header mega menu: hover or click on Men/Women, tab switching, dismissal.
3. Mobile hamburger drawer: open, drill-down, close.
4. Best Sellers carousel arrows: step width, looping, disabled state at ends.
5. Quick Add: trigger, size prompt, result (do not complete purchase).
6. Color swatch selection on a card and on PDP.
7. PDP size selection: enabling the "Select a size" CTA.
8. PDP accordions: open and close, animation duration.
9. PDP gallery thumbnails and Previous/Next.
10. Collection filter drawer and sort dropdown.
11. Search: predictive results while typing; empty state.
12. Cart drawer: open, close, empty state.
13. Newsletter: validation message only (do not submit).
14. Floating assistant: open, dismiss.

## Observed (static)
- Carousels use circular prev/next buttons at the right of the heading.
- Hero uses a two-panel photo with a text overlay (no motion observed in still frames).
- The announcement bar auto-cycles or is user-driven: **Unavailable** until tested.

## Motion values
- Durations and easings: **Unavailable**. Needs a computed-style or transition inspection pass.

## Acceptance criteria
- Each interaction above has a recorded trigger, initial state, action, result, dismissal, keyboard behavior, and mobile equivalent.
- No checkout or payment action is performed.

# IRAI Phase 00 — Reference Audit Gap Report

This report validates the documents in docs/reference-audit as a research baseline. It separates observed evidence from architectural assumptions so Phase 01 work does not encode uncertain behavior as a production requirement.

## Confirmed observations

- The reference has an announcement strip, sticky global header, desktop navigation, homepage hero, four category entries, product discovery, editorial content, newsletter/footer, collection pages, product pages, search, and a cart drawer architecture.
- One desktop viewport is verified: **1279 × 945 CSS pixels**. The homepage, men's collection, men's product page, search results, and an Our Story page have screenshot evidence at that viewport or a scaled derivative.
- The reference information architecture supports product collections, product detail pages, editorial pages, search results, and a cart experience.
- The audit observed collection sorting labels, product-card badges, product option selection, PDP accordions, and a disabled purchase CTA before a size is selected.
- The audit intentionally avoided checkout and purchase completion. That boundary should remain in place for future reference research.

## Inferred design behavior

These are useful implementation hypotheses, not confirmed reference specifications:

- The header collapse threshold is somewhere between the verified desktop viewport and a non-valid narrow capture.
- Hero art direction differs between wide and narrow layouts.
- Product cards may support hover image changes and color-swatch overflow.
- The cart is likely a right-side drawer with a free-shipping progress message.
- The mega menu, mobile menu, filter drawer, cart drawer, predictive search, Quick Add, and added-to-cart cross-sell all have a plausible structure from DOM evidence but incomplete observed behavior.
- CMS mapping to metaobjects/metafields is an IRAI architecture decision from document 10, not evidence about the reference implementation.

## Missing screenshot evidence

- No trustworthy mobile screenshots exist.
- No unscaled screenshots are available for the promo/editorial sections, footer, cart drawer, mega menu, mobile navigation, filter drawer, search overlay, or empty search state.
- No screenshot shows the completed collection filter/sort interaction, Quick Add prompt, add-to-cart result, product zoom, sticky PDP purchase behavior, reviews, policy dialogs, or newsletter validation.
- The evidence index names screenshots as “on disk, this session”; none are committed in this branch. The visual files therefore cannot yet be used for automated comparisons.

## Contradictory interaction results

- Document 03 says live interactions were not tested, while document 08 records successful announcement-arrow, mega-menu, carousel, PDP accordion, size-selection, cart-button, and mobile-menu observations.
- Document 12 labels announcement arrows, carousel arrows, and several other items as not clicked/tested, while document 08 describes outcomes for those actions.
- Document 06 says the cart was not opened live; document 08 says a View Cart action dimmed the page and placed the cart heading off-canvas.
- Document 05 describes a gallery with a main image and thumbnail rail; document 08 says the desktop gallery showed a two-column thumbnail grid.
- Document 01 marks Women’s collection, Help, Returns, and Shoe Care as not inspected; document 12’s updated count says those pages were visited. The available documents do not reconcile which observations were captured or verified.

## Invalid responsive measurements

- The only verified CSS viewport is **1279 × 945**.
- The requested 1440, 1024, 390, and 320 frames are invalid as breakpoint evidence. Document 07 records a requested 390-pixel frame reporting about 991 CSS pixels, and document 12 repeats that the other narrow/wide requested sizes may be similarly unreliable.
- No breakpoint number, typography scale, image crop rule, or mobile layout should be copied from those rows without a real viewport capture.
- The 320-pixel “no horizontal scroll” statement is visual-only and not a valid acceptance test until retested at an actual 320 CSS-pixel viewport.

## Uninspected pages and features

- Reference pages: New Arrivals, Shop All, Materials, Materials & Making, Shoe Care, Help, Returns & Exchanges, Press/Blog, The Perch, Community Offers, and empty search state need a confirmed evidence pass.
- Cross-device flows: mobile navigation drill-down, collection filtering, cart drawer, product gallery, and PDP sticky behavior need inspection.
- Interaction/accessibility: keyboard navigation, focus visibility, hover states, motion durations/easing, newsletter validation, menu dismissal rules, filter controls, predictive search, and policy dialogs require testing.
- Commerce flows: Quick Add, line updates/removal, subtotal/checkout handoff, and any test-mode cart verification remain unobserved. Checkout should remain excluded from unauthorised testing.

## Phase 01 evidence priorities

1. Capture genuine 1440, 1024, 768, 390, and 320 CSS-pixel frames.
2. Save source screenshots to a versioned evidence location with page, viewport, date, and state in each filename.
3. Retest the conflicting interactions and record trigger, result, dismissal, keyboard behavior, and device.
4. Verify the existing IRAI catalog, menus, product media, metafields, and publication state in a non-production-safe workflow before binding visual sections to real content.

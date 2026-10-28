# 06 — Cart, Search, and Checkout Spec (Allbirds, observed)

## Search
- Route: `/search?q=<term>`.
- Layout: centered search field with "Search" value and clear (x) control; result count line ("We found 77 results for 'runner'"); Filter button; Products / Articles tabs; sort dropdown (default "Relevance").
- Product results: 4-up grid on desktop, same card pattern as collections, with Quick Add.
- Articles tab: editorial cards with date and title (example: a jogging-shoe article dated June 2025).
- Empty state: **not captured**.
- Predictive search dropdown while typing: **not tested**.
- Search overlay from the header icon: **not opened**.

## Cart
- Drawer heading "Cart (N)", where N is item count (empty = 0).
- Free-shipping progress line: "Spend $100 more to earn free shipping!"
- Empty state: "Your cart is empty. Start shopping!" plus five shortcut buttons (Shop Womens, Shop Mens, Shop Socks, Shop Women's Sale, Shop Men's Sale).
- Added-to-cart modal: "Added to Cart" heading, free-shipping progress, "You may also like" carousel with Previous/Next, cross-sell cards such as socks with color counts.
- Quantity changes, remove-item behavior, subtotal, and checkout button: **not tested** (no items added, by design).

## Checkout
- **Not inspected.** Per the safety rules, no items were added, and checkout was not opened.

## Blockers
- Adding an item to the cart is allowed for research only if no purchase is made. This was not done. Cart mechanics therefore rest on DOM observations, not live behavior.

## IRAI mapping
- Search: product and article search, with the same tab split (Products, Stories or Journal).
- Cart drawer: free-shipping progress tied to the IRAI threshold, shortcut buttons to festival and gifting collections.
- Added-to-cart modal: cross-sell of matching items (e.g., a matching wall frame).

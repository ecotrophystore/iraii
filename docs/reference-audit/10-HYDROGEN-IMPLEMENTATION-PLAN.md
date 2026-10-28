# 10 — Hydrogen Implementation Plan (for IRAI, derived from observed structure)

Target stack: Shopify Hydrogen, React Router, TypeScript, Storefront API, Oxygen. Shared existing Shopify backend. Repository not yet attached to this session.

## Route architecture
- `/` homepage
- `/collections/:handle` collection (filters, sort, product grid)
- `/products/:handle` product detail
- `/search` search with Products and Stories tabs
- `/pages/:handle` editorial and policy pages (our-story, materials, shoe-care, help, returns)
- `/cart` (drawer primary; route fallback)

## Layout components
- `RootLayout`: announcement bar, sticky header, footer, cart drawer provider.
- `Header`: logo, nav (Collections, Festivals, Gifting, Our Story), search, cart count. Collapses to hamburger at or below tablet width.
- `MegaMenu`: tabbed panels driven by Shopify menus or metaobjects.
- `MobileDrawer`: drill-down categories.

## Homepage components
- `HeroBanner` (metaobject: eyebrow, H1, image per breakpoint, two CTAs).
- `CategoryTileRow` (metaobject list: image, label, link).
- `ProductCarousel` (collection reference, prev/next, Quick Add).
- `PromoTileRow` (metaobject list).
- `ValueBlocks` (metaobject list: title, body).

## Collection components
- `CollectionHero`, `Breadcrumbs`, `FilterDrawer` (Storefront API product filters), `SortSelect`, `ProductGrid`, `ProductCard` (badges, swatches with +N, Quick Add).

## Product components
- `ProductGallery` (thumbnails, Previous/Next, zoom to be tested), `ProductInfo` (title, price, variants), `VariantSelector` (size grid, color swatches), `AddToCart`, `Accordion` (why, materials, care), `RelatedProducts`, `FAQ`.

## Cart and search components
- `CartDrawer` (empty state, free-shipping progress, shortcut buttons, line items, subtotal, checkout link).
- `AddedToCartModal` (cross-sell carousel).
- `SearchPanel` (predictive results, Products and Stories tabs, sort).

## Storefront API queries (outline)
- `collection` with products, filters, sort keys.
- `product` with variants, options, media, metafields.
- `search` with productFilters and article results.
- `cart` create, add lines, update quantity, remove.

## Metaobjects and metafields
- Metaobject `hero_banner`, `category_tile`, `promo_tile`, `value_block`, `festival_collection`.
- Product metafields: `material_story`, `care_instructions`, `why_this_piece`, `finish_options`.

## SEO
- Per-route meta and canonical, product JSON-LD, FAQ JSON-LD on collections and PDP.

## Accessibility
- Keyboard navigation for menus and drawers (not yet tested on the reference).
- Visible focus states.

## Responsive CSS
- Breakpoints to verify with real CSS widths: 1440, 1024, 768, 390, 320.

## Testing and verification
- Lighthouse on homepage and PDP.
- Cart flow tested on Shopify test mode only.
- Visual comparison against the audit screenshots.

## Blockers before implementation
- Interaction specs (doc 08) not tested.
- Repository not attached.

# 04 — Collection Page Spec (Men's Shoes, observed)

URL: https://www.allbirds.com/collections/mens

## Structure (Observed)
1. Announcement bar.
2. Sticky header (same as homepage).
3. **Breadcrumb**: Home / Men's Shoes.
4. **Collection hero**: full-width image band (~200 px tall at 0.6 scale), title "Men's Shoes", one-sentence description, white text over photo.
5. **Toolbar**: Filter button with count "(38 products)"; MEN / WOMEN segmented toggle; sort dropdown (default "Featured").
6. **Product grid**: 4 columns at 1279 px viewport; card = image, badge, name, colorway, price, color swatches with "+N" overflow, Quick Add.
7. **Product count**: 38 products in the filter label. **44 unique product URLs** present in the DOM (Measured via DOM count).
8. **SEO copy block** after grid: category description and FAQ questions ("Do Allbirds run true to size?", "Are Allbirds shoes wide or narrow?", "Are Allbirds meant to be worn without socks?", "Are Allbirds washable?").

## Sort options (Observed)
Featured · Most relevant · Best selling · Alphabetically A-Z / Z-A · Price low→high / high→low · Date old→new / new→old.

## Badges (Observed)
NEW · FINAL FEW · WATERPROOF · NEW COLOR.

## Card specs (Measured/Observed)
- Card image aspect: roughly square; product shot centered on white/neutral.
- Price shown as "$105" style, with "Free shipping" messaging on PDP rather than cards.
- Quick Add shown on every card with icon label.

## Pagination
- Not observed in the first viewport; the DOM lists all products on one page. **Unavailable**: whether infinite scroll or pagination is used at the bottom.

## Mobile filter
- **Not inspected** (requires viewport change).

## Missing / blockers
- Filter drawer contents (size, color, price facets): **Not opened**.
- Hover image swap: **Not tested**.
- Empty-result state: **Not inspected** (search empty state also not captured).

## IRAI mapping
- Collection hero → festival/collection banner (CMS-editable).
- Filter/sort bar → Finish, Size, Artwork theme, Price, Sort.
- Quick Add → Quick view / Add to cart, with size/finish required on card.
- Product count and badges → same, using IRAI badges (Limited, Festival, Made to order).

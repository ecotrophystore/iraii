# IRAI storefront

Hydrogen (React Router) storefront for [iraii.in](https://iraii.in), built for Shopify Oxygen.

## Status

MVP. Pages run on mock catalog data in `app/lib/catalog.ts` so the design can be reviewed before the Shopify store is connected.

- Routes: home, collections, product, search, our story, help, not-found
- Cart: browser-stored for now. Moves to Hydrogen's server cart once the store is connected.
- Imagery: placeholder artwork (`app/components/Obj.tsx`). Swap in IRAI photography when shot.
- Fonts: Albert Sans, a grotesk chosen as the open alternative to the licensed face used on the reference site.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

## Connect the Shopify store (next step)

1. Copy `.env.example` to `.env` and set `PUBLIC_STORE_DOMAIN` and `PUBLIC_STOREFRONT_API_TOKEN`.
2. Replace the mock functions in `app/lib/catalog.ts` with Storefront API queries (products, collections, search).
3. Replace the browser cart in `app/lib/store.tsx` with Hydrogen's cart handler.

## Deploy

Push the branch to GitHub and connect the repo to an Oxygen environment in the Shopify admin. `app/server.ts` is the Oxygen entry point. Point `iraii.in` at the Oxygen deployment through DNS.

## Layout

```
app/
  components/   header, footer, cards, overlays, placeholder artwork
  lib/          catalog data, cart and UI state
  routes/       one file per page
  styles/app.css
  root.tsx      site shell
  routes.ts     route table
  server.ts     Oxygen fetch entry
```

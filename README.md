# IRAI Hydrogen storefront — Phase 00

This branch starts from Shopify's official Hydrogen React Router starter with TypeScript, the Oxygen worker entry point, MiniOxygen local preview, and GraphQL code generation.

It is isolated from EcoTrophy's Online Store theme. No Shopify store connection, Oxygen deployment, production domain, or public storefront has been changed in Phase 00.

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
[Get familiar with React Router](https://reactrouter.com/start/framework/routing)

## Phase 00 includes

- React Router
- Hydrogen
- Oxygen
- Vite
- Shopify CLI
- ESLint
- Prettier
- GraphQL generator
- TypeScript and JavaScript flavors
- IRAI design tokens: maroon, muted sage, antique gold, ivory, and natural wood
- Reusable announcement bar, header, mega navigation, mobile navigation, predictive search panel, cart drawer, footer, campaign hero, category tiles, product carousel, editorial sections, product cards, collection template, and product-detail shell
- An audit-gap report in docs/PHASE-00-AUDIT-GAP-REPORT.md

## Getting started

**Requirements:**

- Node.js version 22.x or 24.x

Copy .env.example to .env and fill it with the existing IRAI Hydrogen storefront's credentials. Do not copy values from, edit, or deploy EcoTrophy's Online Store theme.

## Building for production

Run npm install, npm run typecheck, and npm run build.

## Local development

Run npm run dev and open the private local URL printed by MiniOxygen. Use npm run preview after a successful production build to test the built bundle.

## Required before a private Oxygen preview

1. Confirm the existing IRAI Hydrogen storefront in Shopify Admin / Hydrogen channel.
2. Supply the branch's Oxygen environment variables from that existing storefront.
3. Verify Storefront API access and that IRAI products, collections, menus, and media are published to the headless channel.
4. Create a preview environment for this branch in Oxygen. Do not attach iraii.in or promote the environment without written approval.

## Phase 01 homepage checklist

- Replace Phase 00 artwork placeholders with IRAI-owned campaign imagery and approved copy.
- Bind hero, category, campaign, and editorial sections to verified metaobjects/content entries.
- Configure the existing IRAI menu handles and footer links.
- Confirm catalog collections and product metafields for material story, care, and “why this piece”.
- Implement real carousel controls, collection filters, product media gallery, and cart shipping threshold from store configuration.
- Run real-viewport visual QA at 1440, 1024, 768, 390, and 320 CSS pixels against newly captured evidence.

## Setup for using Customer Account API (`/account` section)

Follow step 1 and 2 of <https://shopify.dev/docs/custom-storefronts/building-with-the-customer-account-api/hydrogen#step-1-set-up-a-public-domain-for-local-development>

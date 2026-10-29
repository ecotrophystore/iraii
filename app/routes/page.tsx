// Pages without their own route (e.g. /pages/anything) answer 404 until
// Shopify pages are loaded from the Storefront API.
export async function loader() {
  throw new Response('Page not found', { status: 404 });
}

export default function Page() {
  return null;
}

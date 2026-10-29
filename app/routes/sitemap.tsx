import type { LoaderFunctionArgs } from 'react-router';
import { COLLECTIONS, PRODUCTS } from '~/lib/catalog';

export function loader({ request }: LoaderFunctionArgs) {
  const origin = new URL(request.url).origin;
  const paths = [
    '/',
    '/collections',
    ...Object.keys(COLLECTIONS).map((h) => `/collections/${h}`),
    ...PRODUCTS.map((p) => `/products/${p.id}`),
    '/pages/our-story',
    '/pages/help',
    '/policies/refund-policy',
    '/policies/privacy-policy',
    '/policies/terms-of-service',
    '/policies/shipping-policy',
  ];
  const urls = paths.map((p) => `  <url><loc>${origin}${p}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'max-age=3600' },
  });
}

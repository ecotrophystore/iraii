import type { LoaderFunctionArgs } from 'react-router';

export function loader({ request }: LoaderFunctionArgs) {
  const origin = new URL(request.url).origin;
  const body = [
    'User-agent: *',
    'Disallow: /cart',
    'Disallow: /account',
    'Disallow: /search',
    '',
    `Sitemap: ${origin}/sitemap.xml`,
    '',
  ].join('\n');
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain', 'Cache-Control': 'max-age=86400' },
  });
}

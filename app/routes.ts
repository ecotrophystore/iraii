import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('collections', 'routes/collections.tsx'),
  route('collections/:handle', 'routes/collection.tsx'),
  route('products/:handle', 'routes/product.tsx'),
  route('search', 'routes/search.tsx'),
  route('cart', 'routes/cart.tsx'),
  route('pages/our-story', 'routes/our-story.tsx'),
  route('pages/help', 'routes/help.tsx'),
  route('pages/:pageHandle', 'routes/page.tsx'),
  route('policies/:policyHandle', 'routes/policy.tsx'),
  route('account', 'routes/account.tsx', { id: 'account' }),
  route('account/login', 'routes/account.tsx', { id: 'account-login' }),
  route('account/authorize', 'routes/account.tsx', { id: 'account-authorize' }),
  route('account/orders/:orderId', 'routes/account.tsx', { id: 'account-order' }),
  route('robots.txt', 'routes/robots.tsx'),
  route('sitemap.xml', 'routes/sitemap.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;

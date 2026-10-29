import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('collections/:handle', 'routes/collection.tsx'),
  route('products/:handle', 'routes/product.tsx'),
  route('search', 'routes/search.tsx'),
  route('pages/our-story', 'routes/our-story.tsx'),
  route('pages/help', 'routes/help.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;

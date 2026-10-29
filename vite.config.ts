import { reactRouter } from '@react-router/dev/vite';
import { hydrogen } from '@shopify/hydrogen/vite';
import { oxygen } from '@shopify/mini-oxygen/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  // oxygen() targets the SSR build at Oxygen's worker runtime (workerd):
  // it resolves worker/browser package exports instead of Node ones and
  // replaces process.env references, which do not exist on Oxygen.
  plugins: [hydrogen(), oxygen({ entry: './app/server.ts' }), reactRouter(), tsconfigPaths()],
  server: { port: 3000 },
  ssr: {
    // Bundle dependencies into the server build. Oxygen's worker runtime cannot
    // resolve bare imports such as "react/jsx-runtime" at deploy time.
    noExternal: true,
  },
});

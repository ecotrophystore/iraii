import { reactRouter } from '@react-router/dev/vite';
import { hydrogen } from '@shopify/hydrogen/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [hydrogen(), reactRouter(), tsconfigPaths()],
  server: { port: 3000 },
});

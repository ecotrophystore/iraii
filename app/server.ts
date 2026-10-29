/**
 * Oxygen entry point. Oxygen calls default.fetch for every request.
 * Storefront credentials arrive through `env` (set in the Oxygen dashboard), not in this file.
 */
import { createRequestHandler } from 'react-router';

interface OxygenEnv {
  [key: string]: unknown;
}


const handler = createRequestHandler(() => import('virtual:react-router/server-build'), 'production');

export default {
  async fetch(request: Request, env: OxygenEnv, ctx: { waitUntil(p: Promise<unknown>): void }) {
    return handler(request, { env, ctx } as unknown as Record<string, unknown>);
  },
};

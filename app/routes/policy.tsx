import { Link, useLoaderData, type LoaderFunctionArgs } from 'react-router';
import { POLICIES } from '~/lib/catalog';

// Shopify's standard policy handles, plus the short keys used in the footer.
const HANDLES: Record<string, string> = {
  'refund-policy': 'refund',
  'privacy-policy': 'privacy',
  'terms-of-service': 'terms',
  'shipping-policy': 'shipping',
  refund: 'refund',
  privacy: 'privacy',
  terms: 'terms',
  shipping: 'shipping',
};

export async function loader({ params }: LoaderFunctionArgs) {
  const key = HANDLES[params.policyHandle ?? ''];
  if (!key) throw new Response('Policy not found', { status: 404 });
  const [title, body] = POLICIES[key];
  return { title, body };
}

export function meta({ data }: { data?: { title: string } }) {
  return [{ title: `${data?.title ?? 'Policy'} · IRAI` }];
}

export default function Policy() {
  const { title, body } = useLoaderData<typeof loader>();
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb"><Link to="/">Home</Link> / {title}</nav>
      <article className="prose">
        <h1>{title}</h1>
        <p>{body}</p>
        <p>Questions? Write to hello@irai.in.</p>
      </article>
    </>
  );
}
